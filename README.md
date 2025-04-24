# 💥 Flash Loan Liquidation Operator



## 📚 项目简介

实现一个智能合约（Smart Contract），该合约可以执行一个基于闪电贷的清算操作（liquidation），即：在一次区块链交易中，完成闪电贷 + 清算 + 资产交换。


## 🔗 参考

- 原始 Lab 链接：https://github.com/KaihuaQin/defi-mooc-lab2
- 示例参考实现：https://github.com/yodashiv/defiMoocFlashLoan


## 🔁 实现流程

**1. 借出 USDC（Uniswap V2）**
使用 Flash Swap 机制，从 Uniswap 借出一笔 USDC 资金。
**2. USDC → USDT（Curve）**
调用 Curve 的 3Pool 合约，将 USDC 换为 USDT，用于清算。
**3. 清算 Aave 用户**
- 使用 USDT 帮目标账户偿还部分贷款
- 获得其抵押的 WBTC（清算溢价 + 市场套利）
**4. WBTC → WETH（套利转换）**
通过 SushiSwap 或其他 DEX 将 WBTC 换成 WETH。
**5. 偿还闪电贷 + 获利**
- 计算需要的 WETH 数量，偿还闪电贷
- **剩下的 WETH 即为套利利润**