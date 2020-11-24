import { inject, injectable } from "inversify";
import { IFileSystem } from "./file-system";
import { Type } from "./Type";

interface IFile {
  exist(path: string): boolean;
}

@injectable()
class File {
  constructor(
    @inject(Type.FileSystem)
    private fileSystem: IFileSystem
  ) {}

  exist(path: string): boolean {
    try {
      return this.fileSystem.existsSync(path);
    } catch (e) {
      return false;
    }
  }
}

export { IFile, File };
