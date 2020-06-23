module.exports = {
  plugins: [
    require("postcss-preset-env")({
      features: {
        "custom-properties": false,
        "logical-properties-and-values": { preserve: true },
        "all-property": { preserve: true },
        "break-properties": { preserve: true },
        "font-variant-property": { preserve: true },
        "gap-properties": { preserve: true },
        "logical-properties-and-values": { preserve: true },
        "overflow-property": { preserve: true },
        "overflow-wrap-property": { preserve: true },
        "place-properties": { preserve: true },
      },
    }),
  ],
};
