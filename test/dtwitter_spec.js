// our DTwitter contract object to test
const DTwitter = require('Embark/contracts/DTwitter');

// contract methods we'll be testing
const { createAccount, users, owners, userExists, editAccount, tweet } = DTwitter.methods;

// variables that will be updated in the tests
let accounts;

// set up our config test parameters
config({
  contracts: {
    DTwitter: {
      // would pass constructor args here if needed
    }
  }
}, (err, theAccounts) => {
  // this is the list of accounts our node / wallet controls.
  accounts = theAccounts;
});

// other test parameters
const username = 'testhandle';
const description = 'test description';
const tweetContent = 'test tweet';

// Embark exposes a global contract method as an alias
// for Mocha.describe
contract("DTwitter contract", function () {
  this.timeout(0);


  it("transaction to create a dtwitter user 'testhandle' with description 'test description' should be successful", async function () {

    // do the create account

    // assert that the transaction was successful
    assert.equal(createAccountTx.status, true);

  });

  it("should have created a user 'testhandle'", async function () {

    // get user details from contract

    assert.equal(user.username, username);
    assert.equal(user.description, description);

  });

  it("should have created an owner for our defaultAccount", async function () {
    
    // read from the owners mapping the value associated with the defaultAccount

    // check the return value from owners mapping matches
    assert.equal(usernameHash, web3.utils.keccak256(username));
  });

  it("should know 'testhandle' exists", async function () {
    const usernameHash = web3.utils.keccak256(username);

    // check the usernamehash exists

    assert.equal(exists, true);
  });


  it("should be able to edit 'testhandle' user details", async function () {
    const usernameHash = web3.utils.keccak256(username);
    const updatedDescription = description + ' edited';
    const updatedImageHash = 'QmWvPtv2xVGgdV12cezG7iCQ4hQ52e4ptmFFnBK3gTjnec';

    // call edit account
    
    // then fetch the user details with the usernamehash

    assert.equal(updatedUserDetails.description, updatedDescription);
    assert.equal(updatedUserDetails.picture, updatedImageHash);
  });

  it("should be able to add a tweet as 'testhandle' and receive it via contract event", async function () {
    const usernameHash = web3.utils.keccak256(username);
    
    // send the tweet
    
    // subscribe to new tweet events
    DTwitter.events.NewTweet({
      filter: { _from: usernameHash },
      fromBlock: 1 // must be > 0!
    })
    .on('data', (event) => {
      assert.equal(event.returnValues.tweet, tweetContent);
    });
  });

});
