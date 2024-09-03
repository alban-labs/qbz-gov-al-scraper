# Government Gazettes PDFs Downloader

This Deno script downloads all official gazette PDFs from the Official Publishing Center of Albania (Albanian: Qendra e Botimeve Zyrtare – QBZ). The script queries the API of the Official Publishing Center to retrieve journal entries from the year 2000 to 2024 and downloads each PDF to a local directory.

## Features

- Queries the Official Publishing Center API for gazette entries from 2000 to 2024.
- Downloads all available PDF files in a single execution (currently, there are 4,567 files available).
- Saves all downloaded PDFs to a local `gazettes` directory.

## Requirements

- [Deno](https://deno.land/) must be installed on your machine. Deno is a modern runtime for JavaScript and TypeScript that provides secure defaults and an excellent developer experience.

## Installation

1. Install Deno by following the instructions on the [official website](https://deno.land/#installation).

2. Clone this repository or copy the script to your local machine.

## Usage

1. Clone the repository or save the script to a file, e.g., `download-govt-gazettes.ts`.

2. Run the script using Deno:

   ```bash
   deno run --allow-net --allow-write download-govt-gazettes.ts
   ```