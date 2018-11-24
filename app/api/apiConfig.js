import {getFaucet} from "../branding";

export const blockTradesAPIs = {};

export const openledgerAPIs = {};

export const rudexAPIs = {};

export const cryptoBridgeAPIs = {};

export const widechainAPIs = {};

export const gdex2APIs = {};

// Legacy Deposit/Withdraw
export const gdexAPIs = {};

export const xbtsxAPIs = {};

export const nodeRegions = [
    // region of the node follows roughly https://en.wikipedia.org/wiki/Subregion#/media/File:United_Nations_geographical_subregions.png
    "Northern Europe",
    "Western Europe",
    "Southern Europe",
    "Eastern Europe",
    "Northern Asia",
    "Western Asia",
    "Southern Asia",
    "Eastern Asia",
    "Central Asia",
    "Southeastern Asia",
    "Australia",
    "New Zealand",
    "Melanesia",
    "Polynesia",
    "Micronesia",
    "Northern Africa",
    "Western Africa",
    "Middle Africa",
    "Eastern Africa",
    "Southern Africa",
    "Northern America",
    "Central America",
    "Caribbean",
    "South America"
];

export const settingsAPIs = {
    // If you want a location to be translated, add the translation to settings in locale-xx.js
    // and use an object {translate: key} in WS_NODE_LIST
    DEFAULT_WS_NODE: "ws://34.217.40.65:9999",
    WS_NODE_LIST: [
        {
            url: "ws://127.0.0.1:8090",
            location: "Locally hosted"
        },
        {
            url: "ws://34.217.40.65:9999",
            location: "Singapore node"
        }
    ],
    DEFAULT_FAUCET: getFaucet().url,
    TESTNET_FAUCET: "http://54.201.250.193:3000"
};
