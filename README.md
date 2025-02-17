<div align="center">
    <img width="64" alt="drawdb logo" src="./src/assets/icon-dark.png">
    <h1>drawDB</h1>
</div>

<h3 align="center">Free, simple, and intuitive database schema editor and SQL generator.</h3>

<div align="center" style="margin-bottom:12px;">
    <a href="https://drawdb.app/" style="display: flex; align-items: center;">
        <img src="https://img.shields.io/badge/Start%20building-grey" alt="drawDB"/>
    </a>
    <a href="https://discord.gg/BrjZgNrmR6" style="display: flex; align-items: center;">
        <img src="https://img.shields.io/discord/1196658537208758412.svg?label=Join%20the%20Discord&logo=discord" alt="Discord"/>
    </a>
    <a href="https://x.com/drawDB_" style="display: flex; align-items: center;">
        <img src="https://img.shields.io/badge/Follow%20us%20on%20X-blue?logo=X" alt="Follow us on X"/>
    </a>
    <a href="https://buymeacoffee.com/drawdb" style="display: flex; align-items: center;">
        <img src="https://img.shields.io/badge/Support%20us-grey?logo=buymeacoffee" alt="Support us"/>
    </a>
</div>

<h3 align="center"><img width="700" style="border-radius:5px;" alt="demo" src="drawdb.png"></h3>

DrawDB is a robust and user-friendly database entity relationship (DBER) editor right in your browser. Build diagrams with a few clicks, export sql scripts, customize your editor, and more without creating an account. See the full set of features [here](https://drawdb.app/).

## Getting Started

### Local Development

```bash
git clone https://github.com/drawdb-io/drawdb
cd drawdb
npm install
npm run dev
```

### Build

```bash
git clone https://github.com/drawdb-io/drawdb
cd drawdb
npm install
npm run build
```

### Docker Build

```bash
docker build -t drawdb .
docker run -p 3000:80 drawdb
```

Set up the [server](https://github.com/drawdb-io/drawdb-server) and environment variables according to `.env.sample` for the survey and bug report forms.

## Running drawDb in Component Mode

To run drawDb as a component in your main React project, follow these steps:

1. Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/drawdb-io/drawdb
cd drawdb
```

2. Install the dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. In your main React project, add drawDb as a dependency. You can do this by linking the built drawDb project:

```bash
npm link ../path-to-drawdb
```

5. Import and use the `DrawDbComponent` in your main React project:

```jsx
import DrawDbComponent from 'drawdb';

function App() {
  return (
    <div>
      <h1>Main React Project</h1>
      <DrawDbComponent isComponentMode={true} />
    </div>
  );
}

export default App;
```

## Sample React Next.js Project with Shadcn

A sample React Next.js project with Shadcn is provided to demonstrate drawDb running as a component. Follow these steps to set it up:

1. Navigate to the `sample-react-next-shadcn-project` directory:

```bash
cd sample-react-next-shadcn-project
```

2. Install the dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000` to see drawDb running as a component in the sample project.
