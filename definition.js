Blockly.Blocks['yolobit_mp3player_kt4031_start'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "yolobit_mp3player_kt4031_start",
        "message0": "khởi động máy nghe nhạc chân TX %1 chân RX %2",
        "previousStatement": null,
        "nextStatement": null,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TX",
            "options": [
              [
                "P3",
                "pin3"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "RX",
            "options": [
              [
                "P6",
                "pin6"
              ],
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],              
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],              
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['yolobit_mp3player_kt4031_start'] = function(block) {
  // TODO: Assemble Python into code variable.
  var tx = block.getFieldValue('TX');
  var rx = block.getFieldValue('RX');
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_soundbit'] = 'from yolobit_kt403a import *';
  Blockly.Python.definitions_['create_sound'] = 'sound = KT403A(' + rx + ', ' + tx +')';
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var code = 'time.sleep_ms(1000)\nsound.first_play()\n';
  return code;
};

Blockly.Blocks['yolobit_mp3player_kt4031_playback'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "yolobit_mp3player_kt4031_playback",
        "message0": "chế độ lặp %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "mode",
            "options": [
              [
                "lặp toàn bộ",
                "0x00"
              ],
              [
                "lặp trong thư mục",
                "0x01"
              ],
              [
                "lặp 1 bài",
                "0x02"
              ],
              [
                "ngẫu nhiên",
                "0x03"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['yolobit_mp3player_kt4031_playback'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep_ms(100)\nsound.playback('+dropdown_mode+')\n';
  return code;
};

Blockly.Blocks['yolobit_mp3player_kt4031_action'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "yolobit_mp3player_kt4031_action",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "action",
            "options": [
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_mp3_player_KT403A/images/play.png",
                  "width": 50,
                  "height": 20,
                  "alt": "*"
                },
                "play"
              ],
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_mp3_player_KT403A/images/pause.png",
                  "width": 50,
                  "height": 20,
                  "alt": "*"
                },
                "pause"
              ],
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_mp3_player_KT403A/images/next.png",
                  "width": 50,
                  "height": 20,
                  "alt": "*"
                },
                "playNext"
              ],
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_mp3_player_KT403A/images/previous.png",
                  "width": 50,
                  "height": 20,
                  "alt": "*"
                },
                "playPrevious"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['yolobit_mp3player_kt4031_action'] = function(block) {
  var dropdown_action = block.getFieldValue('action');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep_ms(100)\nsound.'+dropdown_action+'()\n';
  return code;
};

Blockly.Blocks['yolobit_mp3player_kt4031_vol'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "yolobit_mp3player_kt4031_vol",
        "message0": "mở âm lượng %1 %%",
        "args0": [
          {
            "type": "input_value",
            "name": "vol"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['yolobit_mp3player_kt4031_vol'] = function(block) {
  var number_vol = Blockly.Python.valueToCode(block, 'vol', Blockly.Python.ORDER_ATOMIC);
  // number_vol = number_vol/100;
  // TODO: Assemble Python into code variable.
  var code = 'sound.volume('+number_vol+')\n';
  return code;
};

Blockly.Blocks['yolobit_mp3player_kt4031_sound'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "yolobit_mp3player_kt4031_sound",
        "message0": "đổi thể loại nhạc %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "class",
            "options": [
              [
                "mặc định",
                "0x00"
              ],
              [
                "Rock",
                "0x01"
              ],
              [
                "Pop",
                "0x02"
              ],
              [
                "Jazz",
                "0x03"
              ],
              [
                "Classic",
                "0x04"
              ],
              [
                "Base",
                "0x05"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['yolobit_mp3player_kt4031_sound'] = function(block) {
  var dropdown_class = block.getFieldValue('class');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep_ms(20)\nsound.class_mucsic('+dropdown_class+')\n';
  return code;
};

Blockly.Blocks["yolobit_mp3player_kt4031_updown_vol"] = {
  init: function() {
    this.jsonInit({
      "type": "yolobit_mp3player_kt4031_updown_vol",
      "message0": "%1 âm lượng",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "updown_vol",
          "options": [
            [
              "tăng",
              "volumeUp"
            ],
            [
              "giảm",
              "volumeDown"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#780779",
      "tooltip": "",
      "helpUrl": ""
    });
  }
};
Blockly.Python['yolobit_mp3player_kt4031_updown_vol'] = function(block) {
  var dropdown_updown_vol = block.getFieldValue('updown_vol');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep_ms(20)\nsound.'+dropdown_updown_vol+'()\n';
  return code;
};
