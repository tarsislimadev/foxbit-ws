
export const getCurrenciesList = () => [
  {
    'name': 'Real',
    'precision': 2,
    'category': null,
    'symbol': 'brl',
    'type': 'FIAT',
    'deposit_info': {
      'min_to_confirm': null,
      'min_amount': '5'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '10',
      'fee': '0'
    }
  },
  {
    'name': 'Bitcoin',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'btc',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '2',
      'min_amount': '0.0002'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.0004',
      'fee': '0.0005'
    }
  },
  {
    'name': 'XRP',
    'precision': 6,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'xrp',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '1',
      'min_amount': '23.08'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '46.16',
      'fee': '0.1'
    }
  },
  {
    'name': 'Litecoin',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'ltc',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '6',
      'min_amount': '0.004'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.008',
      'fee': '0.001'
    }
  },
  {
    'name': 'Ethereum',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'eth',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '0.00348'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.00696',
      'fee': '0.001'
    }
  },
  {
    'name': 'TrueUSD',
    'precision': 8,
    'category': {
      'code': 'stablecoin',
      'name': 'Stablecoin'
    },
    'symbol': 'tusd',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '17.08'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '34.16',
      'fee': '17'
    }
  },
  {
    'name': 'Chainlink',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'link',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '2'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '4',
      'fee': '0.17'
    }
  },
  {
    'name': 'Tether',
    'precision': 8,
    'category': {
      'code': 'stablecoin',
      'name': 'Stablecoin'
    },
    'symbol': 'usdt',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '18.32'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '36.64',
      'fee': '12'
    }
  },
  {
    'name': 'Aave',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'aave',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '0.208'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.416',
      'fee': '0.03'
    }
  },
  {
    'name': 'Chiliz',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'chz',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '192'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '384',
      'fee': '157'
    }
  },
  {
    'name': 'Uniswap',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'uni',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '2.6'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '5.2',
      'fee': '1.9'
    }
  },
  {
    'name': 'yearn.finance',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'yfi',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '0.00216'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.00432',
      'fee': '0.002'
    }
  },
  {
    'name': 'Nexo',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'nexo',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '20.24'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '40.48',
      'fee': '27'
    }
  },
  {
    'name': 'Synthetix',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'snx',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '5.92'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '11.84',
      'fee': '6'
    }
  },
  {
    'name': 'OMG Network',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'omg',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '24.52'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '49.04',
      'fee': '26'
    }
  },
  {
    'name': '0x',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'zrx',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '68'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '136',
      'fee': '46'
    }
  },
  {
    'name': 'Kyber Network',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'knc',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '16'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '32',
      'fee': '33'
    }
  },
  {
    'name': 'Polkadot',
    'precision': 8,
    'category': {
      'code': 'governanca',
      'name': 'Governança'
    },
    'symbol': 'dot',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '1',
      'min_amount': '0.32'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.64',
      'fee': '0.16'
    }
  },
  {
    'name': 'Axie Infinity',
    'precision': 8,
    'category': {
      'code': 'gamecoins',
      'name': 'Gamecoins'
    },
    'symbol': 'axs',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '2.48'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '4.96',
      'fee': '2.4'
    }
  },
  {
    'name': 'Cardano',
    'precision': 8,
    'category': {
      'code': 'governanca',
      'name': 'Governança'
    },
    'symbol': 'ada',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '3.2'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '6.4',
      'fee': '1.6'
    }
  },
  {
    'name': 'Smooth Love Potion',
    'precision': 8,
    'category': {
      'code': 'gamecoins',
      'name': 'Gamecoins'
    },
    'symbol': 'slp',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '8380'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '16760',
      'fee': '8954'
    }
  },
  {
    'name': 'Stellar',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'xlm',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '1',
      'min_amount': '0.08'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.16',
      'fee': '0.02'
    }
  },
  {
    'name': 'Polygon',
    'precision': 8,
    'category': {
      'code': 'governanca',
      'name': 'Governança'
    },
    'symbol': 'matic',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '38.88'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '77.76',
      'fee': '6'
    }
  },
  {
    'name': 'USD Coin',
    'precision': 8,
    'category': {
      'code': 'stablecoin',
      'name': 'Stablecoin'
    },
    'symbol': 'usdc',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '18.32'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '36.64',
      'fee': '5.9'
    }
  },
  {
    'name': 'Decentraland',
    'precision': 8,
    'category': {
      'code': 'metaverso',
      'name': 'Metaverso'
    },
    'symbol': 'mana',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '39.4'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '78.8',
      'fee': '22'
    }
  },
  {
    'name': 'The Sandbox',
    'precision': 8,
    'category': {
      'code': 'metaverso',
      'name': 'Metaverso'
    },
    'symbol': 'sand',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '37'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '74',
      'fee': '25'
    }
  },
  {
    'name': 'Maker',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'mkr',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '0.0116'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.0232',
      'fee': '0.002'
    }
  },
  {
    'name': 'Curve DAO Token',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'crv',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '25.68'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '51.36',
      'fee': '15'
    }
  },
  {
    'name': 'Compound',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'comp',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '0.284'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.568',
      'fee': '0.18'
    }
  },
  {
    'name': 'Basic Attention Token',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'bat',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '68'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '136',
      'fee': '54'
    }
  },
  {
    'name': 'SushiSwap',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'sushi',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '20'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '40',
      'fee': '12'
    }
  },
  {
    'name': 'Storj',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'storj',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '48'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '96',
      'fee': '15'
    }
  },
  {
    'name': 'Audius',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'audio',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '76'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '152',
      'fee': '83'
    }
  },
  {
    'name': 'Dai',
    'precision': 8,
    'category': {
      'code': 'stablecoin',
      'name': 'Stablecoin'
    },
    'symbol': 'dai',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '16'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '32',
      'fee': '11'
    }
  },
  {
    'name': 'The Graph',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'grt',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '132'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '264',
      'fee': '59'
    }
  },
  {
    'name': 'Alpha Venture DAO',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'alpha',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '110'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '220',
      'fee': '110'
    }
  },
  {
    'name': 'Tezos',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'xtz',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '10',
      'min_amount': '0.04'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.08',
      'fee': '0.2'
    }
  },
  {
    'name': 'EOS',
    'precision': 8,
    'category': {
      'code': 'governanca',
      'name': 'Governança'
    },
    'symbol': 'eos',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '1',
      'min_amount': '0.32'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.64',
      'fee': '0.2'
    }
  },
  {
    'name': 'Solana',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'sol',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '1',
      'min_amount': '0.032'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.064',
      'fee': '0.01'
    }
  },
  {
    'name': 'Fantom',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'ftm',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '56'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '112',
      'fee': '23'
    }
  },
  {
    'name': 'Shiba Inu',
    'precision': 8,
    'category': {
      'code': 'memecoin',
      'name': 'Memecoins'
    },
    'symbol': 'shib',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '1487848'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '2975696',
      'fee': '339977'
    }
  },
  {
    'name': 'LooksRare',
    'precision': 8,
    'category': {
      'code': 'nft',
      'name': 'NFT'
    },
    'symbol': 'looks',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '184'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '368',
      'fee': '52'
    }
  },
  {
    'name': 'Illuvium',
    'precision': 8,
    'category': {
      'code': 'gamecoins',
      'name': 'Gamecoins'
    },
    'symbol': 'ilv',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '0.276'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.552',
      'fee': '0.12'
    }
  },
  {
    'name': 'Old Gala',
    'precision': 8,
    'category': {
      'code': 'gamecoins',
      'name': 'Gamecoins'
    },
    'symbol': 'gala',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '999999999'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '1',
      'fee': '3004'
    }
  },
  {
    'name': 'OKB',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'okb',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '6'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '12',
      'fee': '0.12'
    }
  },
  {
    'name': 'Quant',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'qnt',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '0.124'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.248',
      'fee': '0.046'
    }
  },
  {
    'name': 'Amp',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'amp',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '6296'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '12592',
      'fee': '7495'
    }
  },
  {
    'name': 'dYdX',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'dydx',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '5.72'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '11.44',
      'fee': '9.5'
    }
  },
  {
    'name': 'Yield Guild Games',
    'precision': 8,
    'category': {
      'code': 'gamecoins',
      'name': 'Gamecoins'
    },
    'symbol': 'ygg',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '52'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '104',
      'fee': '14'
    }
  },
  {
    'name': 'MyNeighborAlice',
    'precision': 8,
    'category': {
      'code': 'gamecoins',
      'name': 'Gamecoins'
    },
    'symbol': 'alice',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '15.08'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '30.16',
      'fee': '6.2'
    }
  },
  {
    'name': 'Moss Carbon Credit',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'mco2',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '1'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '2',
      'fee': '6.9'
    }
  },
  {
    'name': 'Hathor',
    'precision': 2,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'htr',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '20',
      'min_amount': '4'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '8',
      'fee': '2'
    }
  },
  {
    'name': 'ApeCoin',
    'precision': 8,
    'category': {
      'code': 'metaverso',
      'name': 'Metaverso'
    },
    'symbol': 'ape',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '8.32'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '16.64',
      'fee': '4.9'
    }
  },
  {
    'name': 'Dogecoin',
    'precision': 8,
    'category': {
      'code': 'memecoin',
      'name': 'Memecoins'
    },
    'symbol': 'doge',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '40',
      'min_amount': '16'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '32',
      'fee': '8'
    }
  },
  {
    'name': 'Avalanche',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'avax',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '20',
      'min_amount': '0.032'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.064',
      'fee': '0.0128'
    }
  },
  {
    'name': 'Ambify',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'abfy',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '2'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '4',
      'fee': '1'
    }
  },
  {
    'name': 'BNB',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'bnb',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '0.002'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.004',
      'fee': '0.004'
    }
  },
  {
    'name': 'Coffee Coin',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'cofbr',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '2'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '4',
      'fee': '7.4'
    }
  },
  {
    'name': 'Waves',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'waves',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '0.08'
    },
    'withdraw_info': {
      'enabled': false,
      'min_amount': '0.16',
      'fee': '0.04'
    }
  },
  {
    'name': 'Loopring',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'lrc',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '64'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '128',
      'fee': '23'
    }
  },
  {
    'name': '1inch Network',
    'precision': 8,
    'category': {
      'code': 'governanca',
      'name': 'Governança'
    },
    'symbol': '1inch',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '44'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '88',
      'fee': '14'
    }
  },
  {
    'name': 'Reserve Rights',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'rsr',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '6452'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '12904',
      'fee': '3354'
    }
  },
  {
    'name': 'Livepeer',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'lpt',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '1.72'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '3.44',
      'fee': '0.86'
    }
  },
  {
    'name': 'Balancer',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'bal',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '3.4'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '6.8',
      'fee': '1.9'
    }
  },
  {
    'name': 'IOST',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'iost',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '1000'
    },
    'withdraw_info': {
      'enabled': false,
      'min_amount': '2000',
      'fee': '500'
    }
  },
  {
    'name': 'Serum',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'srm',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '16'
    },
    'withdraw_info': {
      'enabled': false,
      'min_amount': '32',
      'fee': '31'
    }
  },
  {
    'name': 'Immutable X',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'imx',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '20.92'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '41.84',
      'fee': '3.4'
    }
  },
  {
    'name': 'UMA',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'uma',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '8.84'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '17.68',
      'fee': '2.4'
    }
  },
  {
    'name': 'SKALE Network',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'skl',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '544'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '1088',
      'fee': '68'
    }
  },
  {
    'name': 'Civic',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'cvc',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '168'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '336',
      'fee': '58'
    }
  },
  {
    'name': 'DAO Maker',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'dao',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '32'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '64',
      'fee': '7'
    }
  },
  {
    'name': 'Ren',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'ren',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '248'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '496',
      'fee': '72'
    }
  },
  {
    'name': 'Celer Network',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'celr',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '1012'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '2024',
      'fee': '250'
    }
  },
  {
    'name': 'CibraCoin UREA',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'furea',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '2'
    },
    'withdraw_info': {
      'enabled': false,
      'min_amount': '4',
      'fee': '1'
    }
  },
  {
    'name': 'CibraCoin MAP',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'fmap',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '2'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '4',
      'fee': '1'
    }
  },
  {
    'name': 'CibraCoin KCL',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'fkcl',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '2'
    },
    'withdraw_info': {
      'enabled': false,
      'min_amount': '4',
      'fee': '1'
    }
  },
  {
    'name': 'PancakeSwap',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'cake',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '9.48'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '18.96',
      'fee': '0.05'
    }
  },
  {
    'name': 'Cosmos',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'atom',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '1',
      'min_amount': '0.016'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.032',
      'fee': '0.008'
    }
  },
  {
    'name': 'Gala',
    'precision': 8,
    'category': {
      'code': 'gamecoins',
      'name': 'Gamecoins'
    },
    'symbol': 'gala2',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '560'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '1120',
      'fee': '396'
    }
  },
  {
    'name': 'Tron',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'trx',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '1',
      'min_amount': '4'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '8',
      'fee': '3'
    }
  },
  {
    'name': 'Worldcoin',
    'precision': 8,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'wld',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '9.56'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '19.15',
      'fee': '1.4'
    }
  },
  {
    'name': 'Sei',
    'precision': 6,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'sei',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '1',
      'min_amount': '0.8'
    },
    'withdraw_info': {
      'enabled': false,
      'min_amount': '1.6',
      'fee': '0'
    }
  },
  {
    'name': 'PayPal USD',
    'precision': 8,
    'category': {
      'code': 'stablecoin',
      'name': 'Stablecoin'
    },
    'symbol': 'pyusd',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '16'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '32',
      'fee': '8.8'
    }
  },
  {
    'name': 'Bitcoin Cash',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'bch',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '2',
      'min_amount': '0.02056'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '0.02048',
      'fee': '0.00512'
    }
  },
  {
    'name': 'Pax Dollar',
    'precision': 8,
    'category': {
      'code': 'stablecoin',
      'name': 'Stablecoin'
    },
    'symbol': 'usdp',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '16'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '32',
      'fee': '25.6'
    }
  },
  {
    'name': 'Algorand',
    'precision': 8,
    'category': {
      'code': 'cripto',
      'name': 'Cripto'
    },
    'symbol': 'algo',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '1',
      'min_amount': '0.016'
    },
    'withdraw_info': {
      'enabled': false,
      'min_amount': '0.064',
      'fee': '0'
    }
  },
  {
    'name': 'Lido DAO',
    'precision': 8,
    'category': {
      'code': 'defi',
      'name': 'DeFi'
    },
    'symbol': 'ldo',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '25'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '50',
      'fee': '0'
    }
  },
  {
    'name': 'FTPC-34645',
    'precision': 2,
    'category': {
      'code': 'crypto_assets',
      'name': 'Crypto Assets'
    },
    'symbol': 'ftpc34645',
    'type': 'CRYPTO',
    'deposit_info': null,
    'withdraw_info': null
  },
  {
    'name': 'FTPC-35782',
    'precision': 2,
    'category': {
      'code': 'crypto_assets',
      'name': 'Crypto Assets'
    },
    'symbol': 'ftpc35782',
    'type': 'CRYPTO',
    'deposit_info': null,
    'withdraw_info': null
  },
  {
    'name': 'Buddha Spa Token',
    'precision': 2,
    'category': {
      'code': 'utility',
      'name': 'Utility'
    },
    'symbol': 'buddha',
    'type': 'CRYPTO',
    'deposit_info': {
      'min_to_confirm': '15',
      'min_amount': '12'
    },
    'withdraw_info': {
      'enabled': true,
      'min_amount': '24',
      'fee': '6'
    }
  },
  {
    'name': 'FTPCL-0053',
    'precision': 2,
    'category': {
      'code': 'crypto_assets',
      'name': 'Crypto Assets'
    },
    'symbol': 'ftpcl0053',
    'type': 'CRYPTO',
    'deposit_info': null,
    'withdraw_info': null
  },
  {
    'name': 'FXMUSIC-S01',
    'precision': 2,
    'category': {
      'code': 'crypto_assets',
      'name': 'Crypto Assets'
    },
    'symbol': 'fxmusics01',
    'type': 'CRYPTO',
    'deposit_info': null,
    'withdraw_info': null
  },
  {
    'name': 'FTCEC-01',
    'precision': 2,
    'category': {
      'code': 'crypto_assets',
      'name': 'Crypto Assets'
    },
    'symbol': 'ftcec01',
    'type': 'CRYPTO',
    'deposit_info': null,
    'withdraw_info': null
  }
]

export const getInstrumentsList = () => [
  {
    'InstrumentId': 1,
    'Symbol': 'BTC/BRL',
    'Product1': 1,
    'Product1Symbol': 'BTC',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 4,
    'Symbol': 'ETH/BRL',
    'Product1': 4,
    'Product1Symbol': 'ETH',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 12,
    'Symbol': 'USDT/BRL',
    'Product1': 8,
    'Product1Symbol': 'USDT',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 30,
    'Symbol': 'USDC/BRL',
    'Product1': 24,
    'Product1Symbol': 'USDC',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 47,
    'Symbol': 'SOL/BRL',
    'Product1': 41,
    'Product1Symbol': 'SOL',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 10,
    'Symbol': 'XRP/BRL',
    'Product1': 6,
    'Product1Symbol': 'XRP',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-6,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-6,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 26,
    'Symbol': 'ADA/BRL',
    'Product1': 20,
    'Product1Symbol': 'ADA',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 63,
    'Symbol': 'DOGE/BRL',
    'Product1': 57,
    'Product1Symbol': 'DOGE',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 24,
    'Symbol': 'DOT/BRL',
    'Product1': 18,
    'Product1Symbol': 'DOT',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 64,
    'Symbol': 'AVAX/BRL',
    'Product1': 58,
    'Product1Symbol': 'AVAX',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 49,
    'Symbol': 'SHIB/BRL',
    'Product1': 43,
    'Product1Symbol': 'SHIB',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 29,
    'Symbol': 'MATIC/BRL',
    'Product1': 23,
    'Product1Symbol': 'MATIC',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 41,
    'Symbol': 'DAI/BRL',
    'Product1': 35,
    'Product1Symbol': 'DAI',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 2,
    'Symbol': 'LTC/BRL',
    'Product1': 3,
    'Product1Symbol': 'LTC',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 11,
    'Symbol': 'LINK/BRL',
    'Product1': 7,
    'Product1Symbol': 'LINK',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 17,
    'Symbol': 'UNI/BRL',
    'Product1': 11,
    'Product1Symbol': 'UNI',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 28,
    'Symbol': 'XLM/BRL',
    'Product1': 22,
    'Product1Symbol': 'XLM',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 61,
    'Symbol': 'APE/BRL',
    'Product1': 55,
    'Product1Symbol': 'APE',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 31,
    'Symbol': 'MANA/BRL',
    'Product1': 25,
    'Product1Symbol': 'MANA',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 32,
    'Symbol': 'SAND/BRL',
    'Product1': 26,
    'Product1Symbol': 'SAND',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 48,
    'Symbol': 'FTM/BRL',
    'Product1': 42,
    'Product1Symbol': 'FTM',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 45,
    'Symbol': 'XTZ/BRL',
    'Product1': 39,
    'Product1Symbol': 'XTZ',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 25,
    'Symbol': 'AXS/BRL',
    'Product1': 19,
    'Product1Symbol': 'AXS',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 15,
    'Symbol': 'AAVE/BRL',
    'Product1': 9,
    'Product1Symbol': 'AAVE',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 46,
    'Symbol': 'EOS/BRL',
    'Product1': 40,
    'Product1Symbol': 'EOS',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 42,
    'Symbol': 'GRT/BRL',
    'Product1': 36,
    'Product1Symbol': 'GRT',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 34,
    'Symbol': 'MKR/BRL',
    'Product1': 28,
    'Product1Symbol': 'MKR',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 6,
    'Symbol': 'TUSD/BRL',
    'Product1': 5,
    'Product1Symbol': 'TUSD',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 19,
    'Symbol': 'NEXO/BRL',
    'Product1': 13,
    'Product1Symbol': 'NEXO',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 16,
    'Symbol': 'CHZ/BRL',
    'Product1': 10,
    'Product1Symbol': 'CHZ',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 54,
    'Symbol': 'QNT/BRL',
    'Product1': 48,
    'Product1Symbol': 'QNT',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 53,
    'Symbol': 'OKB/BRL',
    'Product1': 47,
    'Product1Symbol': 'OKB',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 35,
    'Symbol': 'CRV/BRL',
    'Product1': 29,
    'Product1Symbol': 'CRV',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 37,
    'Symbol': 'BAT/BRL',
    'Product1': 31,
    'Product1Symbol': 'BAT',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 36,
    'Symbol': 'COMP/BRL',
    'Product1': 30,
    'Product1Symbol': 'COMP',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 23,
    'Symbol': 'KNC/BRL',
    'Product1': 17,
    'Product1Symbol': 'KNC',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 55,
    'Symbol': 'AMP/BRL',
    'Product1': 49,
    'Product1Symbol': 'AMP',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 22,
    'Symbol': 'ZRX/BRL',
    'Product1': 16,
    'Product1Symbol': 'ZRX',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 40,
    'Symbol': 'AUDIO/BRL',
    'Product1': 34,
    'Product1Symbol': 'AUDIO',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 18,
    'Symbol': 'YFI/BRL',
    'Product1': 12,
    'Product1Symbol': 'YFI',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 20,
    'Symbol': 'SNX/BRL',
    'Product1': 14,
    'Product1Symbol': 'SNX',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 21,
    'Symbol': 'OMG/BRL',
    'Product1': 15,
    'Product1Symbol': 'OMG',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 39,
    'Symbol': 'STORJ/BRL',
    'Product1': 33,
    'Product1Symbol': 'STORJ',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 38,
    'Symbol': 'SUSHI/BRL',
    'Product1': 32,
    'Product1Symbol': 'SUSHI',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 51,
    'Symbol': 'ILV/BRL',
    'Product1': 45,
    'Product1Symbol': 'ILV',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 56,
    'Symbol': 'DYDX/BRL',
    'Product1': 50,
    'Product1Symbol': 'DYDX',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 57,
    'Symbol': 'YGG/BRL',
    'Product1': 51,
    'Product1Symbol': 'YGG',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 58,
    'Symbol': 'ALICE/BRL',
    'Product1': 52,
    'Product1Symbol': 'ALICE',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 43,
    'Symbol': 'ALPHA/BRL',
    'Product1': 37,
    'Product1Symbol': 'ALPHA',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 60,
    'Symbol': 'HTR/BRL',
    'Product1': 54,
    'Product1Symbol': 'HTR',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-2,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-2,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 27,
    'Symbol': 'SLP/BRL',
    'Product1': 21,
    'Product1Symbol': 'SLP',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 50,
    'Symbol': 'LOOKS/BRL',
    'Product1': 44,
    'Product1Symbol': 'LOOKS',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 65,
    'Symbol': 'ABFY/BRL',
    'Product1': 59,
    'Product1Symbol': 'ABFY',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 59,
    'Symbol': 'MCO2/BRL',
    'Product1': 53,
    'Product1Symbol': 'MCO2',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 66,
    'Symbol': 'COFBR/BRL',
    'Product1': 61,
    'Product1Symbol': 'COFBR',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 68,
    'Symbol': 'LRC/BRL',
    'Product1': 64,
    'Product1Symbol': 'LRC',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 69,
    'Symbol': '1INCH/BRL',
    'Product1': 65,
    'Product1Symbol': '1INCH',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 70,
    'Symbol': 'RSR/BRL',
    'Product1': 66,
    'Product1Symbol': 'RSR',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 71,
    'Symbol': 'LPT/BRL',
    'Product1': 67,
    'Product1Symbol': 'LPT',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 72,
    'Symbol': 'BAL/BRL',
    'Product1': 68,
    'Product1Symbol': 'BAL',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 75,
    'Symbol': 'IMX/BRL',
    'Product1': 71,
    'Product1Symbol': 'IMX',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 76,
    'Symbol': 'UMA/BRL',
    'Product1': 72,
    'Product1Symbol': 'UMA',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 77,
    'Symbol': 'SKL/BRL',
    'Product1': 73,
    'Product1Symbol': 'SKL',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 78,
    'Symbol': 'CVC/BRL',
    'Product1': 74,
    'Product1Symbol': 'CVC',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 79,
    'Symbol': 'DAO/BRL',
    'Product1': 75,
    'Product1Symbol': 'DAO',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 80,
    'Symbol': 'REN/BRL',
    'Product1': 76,
    'Product1Symbol': 'REN',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 81,
    'Symbol': 'CELR/BRL',
    'Product1': 77,
    'Product1Symbol': 'CELR',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 13,
    'Symbol': 'BTC/USDT',
    'Product1': 1,
    'Product1Symbol': 'BTC',
    'Product2': 8,
    'Product2Symbol': 'USDT',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 82,
    'Symbol': 'FUREA/BRL',
    'Product1': 78,
    'Product1Symbol': 'FUREA',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 14,
    'Symbol': 'ETH/USDT',
    'Product1': 4,
    'Product1Symbol': 'ETH',
    'Product2': 8,
    'Product2Symbol': 'USDT',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 83,
    'Symbol': 'FMAP/BRL',
    'Product1': 79,
    'Product1Symbol': 'FMAP',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 84,
    'Symbol': 'FKCL/BRL',
    'Product1': 80,
    'Product1Symbol': 'FKCL',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 85,
    'Symbol': 'BNB/BRL',
    'Product1': 60,
    'Product1Symbol': 'BNB',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 1000,
    'Symbol': 'FTPC34645/BRL',
    'Product1': 1000,
    'Product1Symbol': 'FTPC34645',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-2,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-2,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 86,
    'Symbol': 'CAKE/BRL',
    'Product1': 81,
    'Product1Symbol': 'CAKE',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 1001,
    'Symbol': 'FTPC35782/BRL',
    'Product1': 1001,
    'Product1Symbol': 'FTPC35782',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-2,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-2,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 87,
    'Symbol': 'ATOM/BRL',
    'Product1': 82,
    'Product1Symbol': 'ATOM',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 1003,
    'Symbol': 'FTPCL0053/BRL',
    'Product1': 1003,
    'Product1Symbol': 'FTPCL0053',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-2,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-2,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 1002,
    'Symbol': 'BUDDHA/BRL',
    'Product1': 1002,
    'Product1Symbol': 'BUDDHA',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-2,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-2,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 1004,
    'Symbol': 'FXMUSICS01/BRL',
    'Product1': 1004,
    'Product1Symbol': 'FXMUSICS01',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-2,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-2,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 1005,
    'Symbol': 'FTCEC01/BRL',
    'Product1': 1005,
    'Product1Symbol': 'FTCEC01',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-2,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-2,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 88,
    'Symbol': 'USDC/USDT',
    'Product1': 24,
    'Product1Symbol': 'USDC',
    'Product2': 8,
    'Product2Symbol': 'USDT',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 89,
    'Symbol': 'BNB/USDT',
    'Product1': 60,
    'Product1Symbol': 'BNB',
    'Product2': 8,
    'Product2Symbol': 'USDT',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 90,
    'Symbol': 'XRP/USDT',
    'Product1': 6,
    'Product1Symbol': 'XRP',
    'Product2': 8,
    'Product2Symbol': 'USDT',
    'QuantityIncrement': 1e-6,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-6,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 91,
    'Symbol': 'ADA/USDT',
    'Product1': 20,
    'Product1Symbol': 'ADA',
    'Product2': 8,
    'Product2Symbol': 'USDT',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 92,
    'Symbol': 'DOGE/USDT',
    'Product1': 57,
    'Product1Symbol': 'DOGE',
    'Product2': 8,
    'Product2Symbol': 'USDT',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 93,
    'Symbol': 'BTC/USDC',
    'Product1': 1,
    'Product1Symbol': 'BTC',
    'Product2': 24,
    'Product2Symbol': 'USDC',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 94,
    'Symbol': 'ETH/USDC',
    'Product1': 4,
    'Product1Symbol': 'ETH',
    'Product2': 24,
    'Product2Symbol': 'USDC',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 95,
    'Symbol': 'BNB/USDC',
    'Product1': 60,
    'Product1Symbol': 'BNB',
    'Product2': 24,
    'Product2Symbol': 'USDC',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 96,
    'Symbol': 'XRP/USDC',
    'Product1': 6,
    'Product1Symbol': 'XRP',
    'Product2': 24,
    'Product2Symbol': 'USDC',
    'QuantityIncrement': 1e-6,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-6,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 97,
    'Symbol': 'ADA/USDC',
    'Product1': 20,
    'Product1Symbol': 'ADA',
    'Product2': 24,
    'Product2Symbol': 'USDC',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 98,
    'Symbol': 'DOGE/USDC',
    'Product1': 57,
    'Product1Symbol': 'DOGE',
    'Product2': 24,
    'Product2Symbol': 'USDC',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 99,
    'Symbol': 'ETH/BTC',
    'Product1': 4,
    'Product1Symbol': 'ETH',
    'Product2': 1,
    'Product2Symbol': 'BTC',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 100,
    'Symbol': 'XRP/BTC',
    'Product1': 6,
    'Product1Symbol': 'XRP',
    'Product2': 1,
    'Product2Symbol': 'BTC',
    'QuantityIncrement': 1e-6,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-6,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 101,
    'Symbol': 'LTC/BTC',
    'Product1': 3,
    'Product1Symbol': 'LTC',
    'Product2': 1,
    'Product2Symbol': 'BTC',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 102,
    'Symbol': 'DOGE/BTC',
    'Product1': 57,
    'Product1Symbol': 'DOGE',
    'Product2': 1,
    'Product2Symbol': 'BTC',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-8,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-8,
  },
  {
    'InstrumentId': 103,
    'Symbol': 'GALA/BRL',
    'Product1': 83,
    'Product1Symbol': 'GALA2',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
  {
    'InstrumentId': 104,
    'Symbol': 'TRX/BRL',
    'Product1': 84,
    'Product1Symbol': 'TRX',
    'Product2': 2,
    'Product2Symbol': 'BRL',
    'QuantityIncrement': 1e-8,
    'PriceIncrement': 1e-2,
    'MinimumQuantity': 1e-8,
    'MinimumPrice': 1e-2,
  },
]
