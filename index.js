const { Command } = require("commander");
const imgToPdf = require("image-to-pdf");
const fs = require("fs");

const program = new Command();
program
  .version("1.0.0")
  .description("CLI for converting images (jpg and png only) to PDF")
  .option("-o, --output <value>", "Name of output file (default = ./output.pdf)")
  .parse(process.argv);
const options = program.opts();
const pages = options.output ? process.argv.slice(4) : process.argv.slice(2);
const outputPath = options.output || "output.pdf";

console.log("\x1b[36m Generating PDF... \x1b[0m");

imgToPdf(pages, imgToPdf.sizes.LETTER)
  .pipe(fs.createWriteStream(`${outputPath}`))

console.log(`\x1b[32m Successfully generated PDF under ${outputPath} \x1b[0m`);
