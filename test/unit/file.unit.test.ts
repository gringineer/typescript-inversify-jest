import { IFile } from "@src/file";
import { IFileSystem } from "@src/file-system";
import { ioc } from "@src/ioc";
import { Type } from "@src/Type";
import { FileSystemMock } from "@test/mock/FileSystem.mock";

const testFilePath = "./test.txt";

describe("Test FileSystem", () => {
  beforeEach(() => {
    ioc.snapshot();
    jest.clearAllMocks();
  });

  afterEach(() => {
    ioc.restore();
  });

  it("confirm existsSync with standard mock", () => {
    ioc.unbind(Type.FileSystem);
    const fileSystemMock = new FileSystemMock();
    ioc.bind<IFileSystem>(Type.FileSystem).toConstantValue(fileSystemMock);

    const file = ioc.get<IFile>(Type.File);

    file.exist(testFilePath);

    expect(fileSystemMock.existsSync).toBeCalled();
  });

  it("confirm existsSync error handle", () => {
    ioc.unbind(Type.FileSystem);

    const fileSystemMock = new FileSystemMock();
    fileSystemMock.existsSync = jest.fn().mockImplementation(() => {
      throw new Error("The sky is falling!");
    });

    ioc.bind<IFileSystem>(Type.FileSystem).toConstantValue(fileSystemMock);

    const file = ioc.get<IFile>(Type.File);

    const result = file.exist(testFilePath);

    expect(fileSystemMock.existsSync).toThrow();
    expect(result).toBe(false);
  });
});
