# Local-Streamify

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

**Local-Streamify** makes media streaming testing and debugging easy. With a simple setup, you can use an HLS-enabled local server to control streaming speed through bandwidth throttling and effectively stream chunked files. This project boosts your testing capabilities and simplifies the process of identifying and resolving issues.

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [How to Use](#how_to_use)
- [TODO](#todo)
- [FAQ](#faq)
- [Authors](#authors)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Local Server with HLS:** Set up a local server for streaming that works like professional streaming services.
- **Controlled Speeds:** Adjust how fast the media streams to mimic different network conditions.
- **File Streaming:** Make sure your files stream without any interruptions or pauses.
- **Versatile Testing:** Test your streaming setup thoroughly to catch any problems.
- **Simple Setup:** It's easy to get started with the setup process.
- **Effective Debugging:** Find and fix issues with streaming quickly using the local server.

## Requirements

- [Node js](https://nodejs.org/)

## Installation

1. **Clone the Repository**
   
   ```bash
   git clone https://github.com/ali72/local-streamify.git
   cd local-streamify
   ```

2. **Install Dependencies**
   
   ```bash
   npm install
   ```

3. **Start the Server**
   
   ```bash
   npm start
   ```

## How to Use

1. **Access the Application:**
   
   - To use the HLS server, open your web browser and navigate to [http://localhost:8000](http://localhost:8000/).
   - To use the file server, navigate to [http://localhost:8001](http://localhost:8001/).

2. **Customize Settings:**
   
   - Modify server settings by accessing the config files located within the `config` folder.

3. **File Server Customization:**
   
   - For the file server, you can specify routes and control download speed throttling for each request. Example configuration:

```js
   {
       url:"/video.mp4",
       filePath:"files/hls/out.mp4",
       downloadThrottle:HIGH_DOWNLOAD_RATE,
    }
```

4. **HLS Server Information:**
- For the HLS server, requests route by default to the `\` path within the `hls` folder inside the `files` folder.
- For instance, you can access http://localhost:8000/output/out.m3u8 to load test an m3u8 video.

## TODO

- Implement speed throttling for the HLS server to control streaming speeds.
- Enhance debugging capabilities by adding additional debug logs for better issue tracking.

## FAQ

#### Why should I use **Local-Streamify**?

**Local-Streamify** offers a simplified and efficient solution for testing and debugging media streaming functionalities. With the ability to set up an HLS-enabled local server, you can seamlessly simulate various streaming scenarios, apply bandwidth throttling for controlled speeds, and handle chunked files with ease. Whether you're a developer working on media-related applications or simply want to enhance your streaming testing capabilities, **Local-Streamify** provides a user-friendly environment to ensure smooth and reliable media playback. Moreover, **Local-Streamify** operates entirely within your local environment, eliminating the need for an internet connection during testing and debugging.

## Authors

- [@ali72](https://www.github.com/ali72)

## Contributing

Contributions are always welcome!

To contribute, download the project, create a new branch, add your code, and then submit a pull request once you've completed your work.

## License

Local-Streamify is available under the MIT license. See the [LICENSE](https://github.com/Ali72/local-streamify/blob/master/LICENSE) file for more info.
