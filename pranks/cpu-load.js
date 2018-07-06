const PrankBase = require("./prank-base");
const os = require('os');
const cp = require("child_process");
const { join } = require("path");

class OverloadCPU extends PrankBase {

	constructor(expressApp) {
		// @todo, not to do this
		super(...arguments);

		/**
		 * @type {number}
		 * @private
		 */
		this.stopTimeout = null;

		/**
		 * @type {Array<cp.ChildProcess>}
		 */
		this.forks = [];
	}

	/**
	 * @public
	 */
	start(duration = 3000) {
		this.stop();
		for(let i=0; i < os.cpus().length; i++) {
			this.forks.push(cp.fork(join(__dirname, "cpu-load-worker-internal")));
		}

		this.stopTimeout = setTimeout(this.stop.bind(this), duration);
	}
	/**
	 * @public
	 */
	stop() {
		this.forks.forEach((f) => {
			f.kill("SIGKILL");
		});
		this.forks = [];
	}

}

module.exports = OverloadCPU;
