/**
 * @param {string} address
 * @return {string}
 */

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// 23.458.89.02
// 23[.]458[.]89[.]02
var defangIPaddr = function (address) {
  // address to array
  const addressSplit = address.split("");
  // find . replace [.]
  for (let i = 0; i < addressSplit.length; i++) {
    if (addressSplit[i] == ".") {
      addressSplit[i] = "[.]";
    }
  }
  // join array to be a string
  return addressSplit.join("");
};

var defangIPaddr = function (address) {
  let output = address.split(".");
  return output.join("[.]");
};

var defangIPaddr = function (address) {
  let output = [...address].map((elem) => {
    return elem == "." ? "[.]" : elem;
  });
  return output.join("");
};
