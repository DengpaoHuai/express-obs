"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var worker_threads_1 = require("worker_threads");
// Simule une tâche longue
function longTask() {
    var sum = 0;
    for (var i = 0; i < 100000000000; i++) {
        sum += i;
    }
    return sum;
}
// Écoute les messages du thread principal
worker_threads_1.parentPort === null || worker_threads_1.parentPort === void 0 ? void 0 : worker_threads_1.parentPort.on("message", function (msg) {
    if (msg === "start") {
        var result = longTask();
        // Envoie le résultat au thread principal
        worker_threads_1.parentPort === null || worker_threads_1.parentPort === void 0 ? void 0 : worker_threads_1.parentPort.postMessage(result);
    }
});
