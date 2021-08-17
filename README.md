Template of React + TypeScript + WASM environment. You can see calculation time of Fibonacci number using JavaScript and WASM.
## Gettings started
### Rust
Create a new Cargo package.

```shell
# specify --lib option (otherwise this command creates a package with a binary target)
cargo new --lib wasm-react-typescript
cd wasm-react-typescript
cargo install wasm-pack
# compile src/lib.rs into wasm binaries in pkg/ 
wasm-pack build
```
### React+TypeScript

```shell
mkdir react-typescript
npm init wasm-app react-typescript
cd react-typescript
# typescript
npm install -D typescript ts-loader tslint
# webpack (install version >=5)
npm install -D webpack@latest webpack-cli html-webpack-plugin @webpack-cli/serve
# plugin to use compiled wasm from webpack
npm install -D @wasm-tool/wasm-pack-plugin
# webpack dev server
npm install -D webpack-dev-server
# react
npm install -S react react-dom @types/react @types/react-dom
```

### Start webpack server
In `webpack.config.js` you can comment out WasmPackPlugin, otherwise wasm-pack compiles `src/lib.rs` every time.

```shell
npm run start
```

### References
- [Call wasm from App.tsx](https://qiita.com/SoraKumo/items/d68b78bedda91ff08435#nextjs%E3%81%8B%E3%82%89wasm%E3%82%92%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%99%E3%82%B3%E3%83%BC%E3%83%89)
- [Setting up React+TypeScript environment](https://www.zeroclock.dev/posts/2020/05/rust-webassembly-react-ts/#react-%E3%81%A8-typescript-%E3%81%AE%E7%92%B0%E5%A2%83%E3%82%92%E6%95%B4%E3%81%88%E3%82%8B)
- [Setting up React+TypeScript environment](https://tech-blog.optim.co.jp/entry/2021/08/13/100000#%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E3%81%97%E3%81%9FWasm%E3%82%92%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%99)

