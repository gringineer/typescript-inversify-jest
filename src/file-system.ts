import fs, { PathLike } from "fs";

interface IFileSystem {
  existsSync(path: PathLike): boolean;
}

class FileSystem implements IFileSystem {
  public existsSync: { (path: PathLike): boolean };
  constructor() {
    this.existsSync = fs.existsSync;
  }
}

export { IFileSystem, FileSystem };
