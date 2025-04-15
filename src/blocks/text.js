import * as Blockly from 'blockly/core';

// Define the blocks listed in the toolbox.
const blocks = [
  {
    type: 'object',
    message0: '{ %1 %2}',
    args0: [
      {
        type: "input_dummy"
      },
      {
        type: 'input_statement',
        name: 'MEMBERS',
      },
    ],
    output: null,
    colour: 230
  },
  {
    type: "member",
    message0: "%1 %2 %3",
    args0: [
      {
        type: "field_input",
        name: "MEMBER_NAME",
        text: ""
      },
      {
        type: "field_label",
        name: "COLON",
        text: ":"
      },
      {
        type: "input_value",
        name: "MEMBER_VALUE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
  },
];

// Register the block definitions.
Blockly.defineBlocksWithJsonArray(blocks);

// Export the blocks array so it can be imported in other files.
export {blocks};
