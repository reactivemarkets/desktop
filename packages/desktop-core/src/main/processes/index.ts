import { ApplicationEventsProcessFork } from "./applicationEventsProcessFork";
import { DesktopEnvironmentProcessFork } from "./desktopEnvironmentProcessFork";
import { ElectronEventsProcessExec } from "./electronEventsProcessExec";
import { ElectronEventsProcessFork } from "./electronEventsProcessFork";
import { ExecFileProcessExec } from "./execFileProcessExec";
import { IProcessExec } from "./iProcessExec";
import { IProcessFork } from "./iProcessFork";
import { SignalHandlingProcessExec } from "./signalHandlingProcessExec";
import { SignalHandlingProcessFork } from "./signalHandlingProcessFork";
import { SpawningProcessFork } from "./spawningProcessFork";

export * from "./iProcessExec";
export * from "./iProcessFork";

const spawningProcessFork = new SpawningProcessFork();

const signalHandlingProcessFork = new SignalHandlingProcessFork(spawningProcessFork, "SIGINT", "SIGTERM");

const electronEventsProcessFork = new ElectronEventsProcessFork(signalHandlingProcessFork);

const applicationEventsProcessFork = new ApplicationEventsProcessFork(electronEventsProcessFork);

export const processFork: IProcessFork = new DesktopEnvironmentProcessFork(applicationEventsProcessFork);

const execFileProcessExec = new ExecFileProcessExec();

const signalHandlingProcessExec = new SignalHandlingProcessExec(execFileProcessExec, "SIGINT", "SIGTERM");

export const processExec: IProcessExec = new ElectronEventsProcessExec(signalHandlingProcessExec);
