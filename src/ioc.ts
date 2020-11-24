import { Container } from "inversify";
import { File, IFile } from "./file";
import { FileSystem, IFileSystem } from "./file-system";
import { Type } from "./Type";

const ioc = new Container({ defaultScope: "Singleton" });

ioc.bind<IFileSystem>(Type.FileSystem).toConstantValue(new FileSystem());
ioc.bind<IFile>(Type.File).to(File);

export { ioc };
