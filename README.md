This is a sample Reporting App, that renders the threats in a table and provides a link to see the details.
Dummy Data implemented for now.

<h4>Install Dependencies</h4>

```bash
npm install
```

<h4>First, local run</h4>

```bash
npm run dev
```
This will start a local server at port 3000.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<h4>Run Test </h4>

```bash
npm run test
```
 
Currently there are two tests included under the __test__ folder for -
<ul>
<li>For the Threat Page</li>
<li>For the Threat Component</li>
</ul>


<h4>Production Build</h4>

```bash
npm run build
```

Static Export

```bash
npm run build
npm run export
or 
npm run deploy(which runs the two command)
```
This will create a 'out' folder in the root directory which could be hosted on any server.

## Tech Stack
<ul>
  <li>React - Frontend Framework.</li>
  <li>Ant Design - UI/UX components.</li>
  <li>Jest - Testing.</li>
  <li>Typescript - For static typing and type checks.</li>
  <li>Axios - For ajax requests.</li>
  <li>ReCharts - For building charts</li>
</ul>
