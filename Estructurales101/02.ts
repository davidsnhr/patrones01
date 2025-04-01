interface FileSystemComponent {
  showDetails(indent?: string): void;
}

class FileEx implements FileSystemComponent {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  showDetails(indent?: string): void {
    console.log(`${indent}- Archivo: ${this.name}`);
  }
}

class Folder implements FileSystemComponent {
  private name: string;
  private contents: FileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addContent(content: FileSystemComponent): void {
    this.contents.push(content);
  }

  showDetails(indent: string = " "): void {
    console.log(`${indent}+ Carpeta: ${this.name}`);

    this.contents.forEach((content) => {
      content.showDetails(indent + '  ');
    });
  }
}

function main() {
  const archivo1 = new FileEx('archivo1.json');
  const archivo2 = new FileEx('archivo2.txt');
  const archivo3 = new FileEx('archivo3.txt');
  const carpeta1 = new Folder('Carpeta1');
  const carpeta2 = new Folder('Carpeta2');

  carpeta1.addContent(archivo1);
  carpeta1.addContent(archivo2);
  carpeta1.addContent(carpeta2);

  carpeta2.addContent(archivo3);

  carpeta1.showDetails();

}

main();
