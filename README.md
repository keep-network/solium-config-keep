# solium-config-keep

Standard configuration for linting Solidity code using [ethlint/Solium](https://github.com/duaraghav8/Ethlint). Uses the `solium:recommended` ruleset, which itself is taken from the [Solidity Style Guide](https://solidity.readthedocs.io/en/v0.5.9/style-guide.html).

## Installation

`npm i https://github.com/keep-network/solium-config-keep.git`

## Usage

### Setting up a project

 1. Install the linter and config - `npm i -D ethlint https://github.com/keep-network/solium-config-keep.git`
 2. Create your `.soliumrc.json`:
 ```json
{
  "extends": "keep",
  "plugins": [
    "security"
  ]
}
 ```
 3. Add commands for linting to your `package.json`:
 ```json
{
  "scripts": {
    "sol:lint": "solium -d contracts/",
    "sol:lint:fix": "solium -d contracts/ --fix"
  }
}
 ```

### Disabling the linter
#### Directory
Edit the `.soliumrc.json`.

#### File
`/* solium-disable */`

#### Code block
`/* solium-disable */`
`/* solium-enable */`

#### Line
`// solium-disable-next-line <rules>`
`// solium-disable-previous-line <rules>`


### Adding a pre-commit hook
```yaml
- repo: local
   hooks:
    - id: solium
      name: Solidity linter
      language: node
      entry: solium
      files: '\.sol$'
      args:
      - --dir=./contracts/
      - --config=./.soliumrc.json
      additional_dependencies:
      - ethlint@1.2.3
```
