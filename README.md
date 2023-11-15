# Metacrafter-Avalanche-Subnets-MOD-1
# Solidity Smart Contracts Example

This repository contains two Solidity smart contracts: `ERC20` and `Vault`. The `ERC20` contract implements a basic ERC-20 token, and the `Vault` contract allows users to deposit and withdraw tokens while maintaining a share-based accounting system.

## ERC20 Token Contract

### Overview

The `ERC20` contract is a basic implementation of the ERC-20 token standard. It provides functionalities such as transferring tokens, approving and transferring tokens on behalf of another address, minting new tokens, and burning existing tokens.

### Details

- **Name:** Solidity by Example
- **Symbol:** SOLBYEX
- **Decimals:** 18
- **Total Supply:** Initially set to 0

#### Functions

1. **`transfer`**
   - Transfers a specified amount of tokens from the sender to the recipient.

2. **`approve`**
   - Approves the spender to transfer a specified amount of tokens on behalf of the owner.

3. **`transferFrom`**
   - Transfers a specified amount of tokens from one address to another on behalf of the owner.

4. **`mint`**
   - Mints a specified amount of new tokens and assigns them to the caller.

5. **`burn`**
   - Burns a specified amount of tokens from the caller's balance.

### Events

- **`Transfer`**
  - Emitted when tokens are transferred from one address to another.

- **`Approval`**
  - Emitted when an approval is granted for one address to spend tokens on behalf of another.

## Vault Contract

### Overview

The `Vault` contract is designed to accept deposits of an ERC-20 token and allows users to withdraw their funds. The share-based accounting system ensures that users receive a proportionate amount of tokens when withdrawing.

### Details

- **Token:** The ERC-20 token accepted by the vault.

#### Functions

1. **`deposit`**
   - Allows users to deposit tokens into the vault, minting shares in proportion to the total supply.

2. **`withdraw`**
   - Allows users to withdraw tokens from the vault, burning shares in proportion to the total supply.

### Share Calculation

The share calculation is based on the formula:

\[s = \frac{a \times T}{B}\]

where:
- \(s\) is the number of shares to mint or burn,
- \(a\) is the amount of tokens (deposit or withdrawal),
- \(T\) is the total supply of shares,
- \(B\) is the balance of the token in the vault.

## License

This code is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.
