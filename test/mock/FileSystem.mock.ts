import { IFileSystem } from "@src/file-system";
import { PathLike } from "fs";

class FileSystemMock implements IFileSystem {
  existsSync: { (path: PathLike): boolean };
  constructor() {
    this.existsSync = jest.fn();
  }
}
export { FileSystemMock };
