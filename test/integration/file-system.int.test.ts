import { IFileSystem } from "@src/file-system";
import { ioc } from "@src/ioc";
import { Type } from "@src/Type";
import fs from "fs";

const testFilePath = "./test.txt";

describe("Test FileSystem", () => {
  it("confirm existsSync", () => {
    const _fileSystem = ioc.get<IFileSystem>(Type.FileSystem);

    const fsExistsSync = fs.existsSync(testFilePath);
    const _fsExistsSync = _fileSystem.existsSync(testFilePath);

    expect<boolean>(fsExistsSync).toEqual<boolean>(_fsExistsSync);
  });
});
