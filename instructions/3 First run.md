## First run
Now let’s run our website quickly to see what embark will do for us.
```
npm install
embark run
```
You should see the Embark console and it's components. 
* *Contracts* - the top left shows which contracts are deployed and their address. * Modules loaded and running - the top right shows the status of the loaded modules running (or not running) in Embark. 
* *Log* - the middle shows log output. 
* *Console* - on the bottom row there is a console that will let us interact with `web3` and `ipfs` (try it out by typing `help` to see available commands).

### Embark output
You’ll notice from the logs and from the modules that Embark has started Go-ethereum and IPFS processes, compiled and deployed our contract, and webpacked our website for us. 
> If you see the error (in red) **"Blockchain process exited before this process with code 0"**, this is a known issue and the Embark team has a fix that will be released with 3.2. To work around this, simply:
> 1. Kill the embark process (either type `quit` in to the Embark console, or press `Ctrl+c`).
> 1. Wait a few seconds.
> 1. Restart the embark process with `embark run`.

> The contract warning in orange will disappear once we update our contract.

### Take a tour of the barebones DTwitter site
The website has several features that *are not yet hooked up to our contract*, but let’s take a look around at the website anyway. Launch `http://localhost:8000` in your browser.

Functionality you'll see:
* Create an account
* Edit account
* Tweet
* Search and view user's tweets

Later, we'll hook this functionality up to a contract.