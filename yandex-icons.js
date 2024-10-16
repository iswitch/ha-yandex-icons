const YANDEX_ICONS_MAP = {
  "alisa": "M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-5.495-8.128c.861.857 3.156 1.371 5.495 1.38 2.338-.009 4.633-.523 5.495-1.38 2.14-2.13-3.062-10.29-5.492-10.302-2.436.013-7.638 8.171-5.498 10.302z",
  "station": "M11.877 0l.21.007c.42.026.836.13 1.237.307l.199.095 5.31 2.802h.01l.138.08.01.005c.101.056.194.123.278.2l.01.01a1.491 1.491 0 0 1 .46 1.24l-.21 14.49c0 .577-.29 1.11-.75 1.405l-.11.064-4.948 2.835a3.965 3.965 0 0 1-3.55.08l-.178-.09-5.014-2.872a1.667 1.667 0 0 1-.774-1.282l-.005-.132-.192-14.496a1.476 1.476 0 0 1 .665-1.401l.11-.065L10.207.418l.017-.01.177-.083c.185-.083.373-.15.562-.202l.052-.014a3.263 3.263 0 0 1 .45-.084c.137-.017.274-.025.411-.025zm-6.64 6.141l.174 13.095c0 .151.068.288.187.377l.064.04 4.915 2.817c.755.4 1.65.425 2.41.083l.149-.074 4.95-2.835a.45.45 0 0 0 .227-.34l.006-.076.188-13.085-5.417 2.86h-.012a2.871 2.871 0 0 1-1.206.269 2.91 2.91 0 0 1-1.189-.262l-.157-.078-5.288-2.79zm10.876-2.317c0 1.593-1.942 2.726-4.24 2.726-2.297 0-4.239-1.133-4.239-2.726 0-.268.055-.522.157-.76L5.362 4.345a.693.693 0 0 0-.026.016l-.012.007-.01.007.012-.007-.01.007-.01.007-.014.011-.001.002-.017.018a.232.232 0 0 0-.045.117l-.006.058-.003.074a.26.26 0 0 0 .083.138l.045.03 5.745 3.032c.242.129.512.197.783.199.219 0 .437-.046.657-.142l.133-.063L18.4 4.83a.255.255 0 0 0 .128-.169.514.514 0 0 0-.034-.217l-.02-.03-.032-.031-.041-.029-2.444-1.29c.102.238.156.492.156.76zm-4.24-1.514c-1.716 0-3.028.765-3.028 1.514 0 .75 1.312 1.514 3.029 1.514 1.717 0 3.028-.765 3.028-1.514 0-.75-1.312-1.514-3.028-1.514z",
  "station-max": "M6.271 11.243l3.786 2.305v2.238L6.27 13.48v-2.238zM11.877 0l.21.007c.42.026.836.13 1.237.307l.199.095 5.31 2.802h.01l.138.08.01.005c.101.056.194.123.278.2l.01.01a1.491 1.491 0 0 1 .46 1.24l-.21 14.49c0 .577-.29 1.11-.75 1.405l-.11.064-4.948 2.835a3.965 3.965 0 0 1-3.55.08l-.178-.09-5.014-2.872a1.667 1.667 0 0 1-.774-1.282l-.005-.132-.192-14.496a1.476 1.476 0 0 1 .665-1.401l.11-.065L10.207.418l.017-.01.177-.083c.185-.083.373-.15.562-.202l.052-.014a3.263 3.263 0 0 1 .45-.084c.137-.017.274-.025.411-.025zm-6.64 6.141l.174 13.095c0 .151.068.288.187.377l.064.04 4.915 2.817c.755.4 1.65.425 2.41.083l.149-.074 4.95-2.835a.45.45 0 0 0 .227-.34l.006-.076.188-13.085-5.417 2.86h-.012a2.871 2.871 0 0 1-1.206.269 2.91 2.91 0 0 1-1.189-.262l-.157-.078-5.288-2.79zm10.876-2.317c0 1.593-1.942 2.726-4.24 2.726-2.297 0-4.239-1.133-4.239-2.726 0-.268.055-.522.157-.76L5.362 4.345a.693.693 0 0 0-.026.016l-.012.007-.01.007.012-.007-.01.007-.01.007-.014.011-.001.002-.017.018a.232.232 0 0 0-.045.117l-.006.058-.003.074a.26.26 0 0 0 .083.138l.045.03 5.745 3.032c.242.129.512.197.783.199.219 0 .437-.046.657-.142l.133-.063L18.4 4.83a.255.255 0 0 0 .128-.169.514.514 0 0 0-.034-.217l-.02-.03-.032-.031-.041-.029-2.444-1.29c.102.238.156.492.156.76zm-4.24-1.514c-1.716 0-3.028.765-3.028 1.514 0 .75 1.312 1.514 3.029 1.514 1.717 0 3.028-.765 3.028-1.514 0-.75-1.312-1.514-3.028-1.514z",
  "station-2": "m13.258.376.199.105 5.487 3.075c.766.428 1.114.962 1.048 1.488L20 18.783c0 1.238-.318 2.042-1.524 2.72l-3.551 2.01c-1.155.65-2.247.65-3.391 0L7.02 20.946l-.501-.29c-.706-.42-1.14-1.039-1.353-1.793C5.03 18.376 5 17.986 5 17.329V4.275l.003-.11c-.038-.511.315-1.029 1.057-1.446L10.08.48C10.6.19 11.112.03 11.62.004l.05-.002h.2c.46.015.921.14 1.388.374ZM6.499 5.7 6.5 17.329l.005.356c.01.32.04.541.107.78.116.412.327.713.679.922l1.596.919 3.394 1.924c.63.359 1.125.386 1.74.083l.291-.16 3.422-1.935c.6-.337.747-.63.764-1.288l-.005-12.395-3.572 1.988c-1.153.636-2.243.636-3.384 0L6.499 5.7Zm4.324-3.932L6.681 4.113l.123.075 5.484 3.07c.677.379 1.199.379 1.887-.001l4.01-2.232.094-.055.023-.015-.008-.006-5.59-3.18c-.677-.387-1.196-.387-1.88 0Zm1.244 1.442 2.58 1.552c.473.28.47.738-.004 1.023-.473.285-1.245.285-1.714 0l-2.576-1.549c-.474-.284-.469-.742.004-1.026.474-.281 1.242-.281 1.71 0Z",
  "station-midi": "m10.617 0 .058.001a3.52 3.52 0 0 1 .484.047 4.56 4.56 0 0 1 1.55.576l6.951 3.988c.892.511 1.326.967 1.329 1.78.014.11.014.219.002.328L21 17.334c0 1.582-.403 2.61-1.93 3.476l-4.499 2.567c-1.463.83-2.846.83-4.295 0L4.56 20.098l-.634-.372c-.894-.536-1.443-1.326-1.713-2.29-.174-.622-.212-1.12-.212-1.96V5.463c0-.918.425-1.418 1.35-1.943L8.43.622C9.033.28 9.62.078 10.208.018l.073-.006a2.597 2.597 0 0 1 .233-.011h.104ZM3.5 7.366v8.248l.006.472c.014.423.053.718.144 1.035.155.546.436.945.905 1.222l2.128 1.218 4.526 2.553c.84.475 1.5.512 2.321.11l.388-.212 4.563-2.567c.8-.447.996-.836 1.019-1.708l-.007-9.26-4.926 2.887c-1.46.848-2.841.848-4.287-.001L3.5 7.366ZM5 10.515l5 3.044v2.956L5 13.47v-2.955ZM10.48 1.5l-.066.003a1.98 1.98 0 0 0-.29.04c-.095.02-.192.046-.29.08-.196.07-.399.17-.613.3L3.734 5.234l-.126.08-.108.075.226.15 7.486 4.542c.924.56 1.637.56 2.577-.003l5.475-3.302.128-.08.099-.07v-.012l-.15-.1-7.563-4.593c-.468-.287-.882-.427-1.299-.42Zm.596 3.716c.52 0 .94.28.94.627 0 .346-.42.628-.94.628s-.941-.282-.941-.628c0-.346.421-.627.94-.627Z",
  "station-mini": "M12.667.5v.012l.253.01C19.077.8 24 3.853 24 7.773v8.823c0 4.114-5.421 7.274-12 7.274-6.578 0-12-3.16-12-7.274V7.775C-.004 3.66 5.418.5 12 .5h.667zm10 16.097V11.14c-2.002 2.35-6.05 3.907-10.667 3.907-4.618 0-8.665-1.556-10.667-3.906v5.455c0 3.185 4.728 5.94 10.667 5.94 5.94 0 10.667-2.755 10.667-5.94V11.14v5.456zM11.84 1.834c-5.867.049-10.51 2.784-10.507 5.94 0 3.186 4.727 5.94 10.667 5.94 5.844 0 10.514-2.666 10.663-5.786l.004-.153v-.001c0-3.138-4.592-5.86-10.41-5.938l-.417-.002zm.264 3.685c1.608 0 3 .795 3 2 0 1.204-1.392 2-3 2s-3-.796-3-2c0-1.205 1.392-2 3-2zm0 1.333c-.97 0-1.667.398-1.667.667 0 .268.698.666 1.667.666.97 0 1.667-.398 1.667-.666 0-.269-.698-.667-1.667-.667z",
  "station-mini-2": "M12 16.733v3.954c-3.483.018-6.968-.909-9-2.829V14.25c2.504 1.717 5.78 2.49 9 2.483zM12.667.5v.012l.253.01C19.077.8 24 3.853 24 7.773v8.823c0 4.114-5.421 7.274-12 7.274-6.578 0-12-3.16-12-7.274V7.775C-.004 3.66 5.418.5 12 .5h.667zm10 16.097V11.14c-2.002 2.35-6.05 3.907-10.667 3.907-4.618 0-8.665-1.556-10.667-3.906v5.455c0 3.185 4.728 5.94 10.667 5.94 5.94 0 10.667-2.755 10.667-5.94V11.14v5.456zM11.84 1.834c-5.867.049-10.51 2.784-10.507 5.94 0 3.186 4.727 5.94 10.667 5.94 5.844 0 10.514-2.666 10.663-5.786l.004-.153c0-3.14-4.592-5.861-10.41-5.94l-.417-.001zm.264 3.685c1.608 0 3 .795 3 2 0 1.204-1.392 2-3 2s-3-.796-3-2c0-1.205 1.392-2 3-2zm0 1.333c-.97 0-1.667.398-1.667.667 0 .268.698.666 1.667.666.97 0 1.667-.398 1.667-.666 0-.269-.698-.667-1.667-.667z",
  "station-mini-2-stereo": "M14.426 0C9.295 0 5.074 2.458 5.074 5.669v1.022c.026-.013.052-.027.079-.039a1.531 1.531 0 0 1 .642-.114c.102 0 .203.001.304.004.06.002.118.004.177.009a2.594 2.594 0 0 1-.166-.886c-.002-2.454 3.609-4.593 8.194-4.634h.324c4.51.062 8.11 2.177 8.11 4.635l-.002.119c-.08 1.68-1.85 3.182-4.428 3.951-.01.094-.019.187-.026.28-.014.16-.01.32 0 .48.008.106.026.209.04.313 1.896-.517 3.464-1.403 4.428-2.524v4.262c0 1.705-1.742 3.244-4.345 4.047l-.003.038c-.036.342-.066.687-.098 1.026l-.004.043c3.215-.877 5.462-2.813 5.462-5.172v-6.87c0-3.049-3.832-5.42-8.607-5.627l-.197-.008V.015L14.426 0Zm.082 3.906c-1.25 0-2.334.62-2.334 1.556 0 .935 1.084 1.556 2.334 1.556s2.333-.62 2.333-1.556c0-.94-1.084-1.556-2.333-1.556Zm0 1.039c.753 0 1.295.31 1.295.517 0 .209-.542.517-1.295.517-.754 0-1.296-.31-1.296-.517 0-.21.542-.517 1.296-.517Zm-1.842 9.641-.01.008c-.001.002-.063.08-.018.027.024-.03.005-.01.016-.004.007.003.01-.011.012-.03ZM9.352 5.648C4.22 5.648 0 8.106 0 11.318v6.868c0 3.203 4.22 5.67 9.352 5.67 5.13 0 9.351-2.459 9.351-5.67v-6.869c0-3.05-3.831-5.42-8.606-5.627l-.198-.008v-.01l-.547-.024Zm-.125 1.039h.324c4.51.062 8.11 2.177 8.11 4.635l-.003.119c-.116 2.429-3.749 4.51-8.276 4.51-4.634 0-8.317-2.143-8.317-4.634-.002-2.454 3.608-4.593 8.193-4.635l-.03.005Zm.205 2.867c-1.25 0-2.333.621-2.333 1.556 0 .936 1.084 1.556 2.333 1.556 1.25 0 2.334-.62 2.334-1.556 0-.939-1.084-1.556-2.334-1.556Zm0 1.04c.754 0 1.296.309 1.296.516 0 .209-.542.518-1.296.518-.753 0-1.295-.31-1.295-.518 0-.209.542-.517 1.295-.517Zm8.235 3.334v4.262c0 2.479-3.679 4.635-8.317 4.635-4.635 0-8.318-2.144-8.318-4.635v-4.262c1.556 1.83 4.718 3.042 8.318 3.042 3.591 0 6.744-1.213 8.317-3.042ZM2.357 16.35v2.81c1.58 1.493 4.303 2.213 6.993 2.201v-3.074c-2.504.005-5.049-.596-6.993-1.933v-.004Z",
  "station-lite": "M12.611 0v.012l.233.01C18.487.308 23 3.445 23 7.47v9.06C22 20.755 17.97 24 12 24S2 20.755 1 16.53V7.47C.997 3.247 5.967 0 12 0h.611zm3.761 21.764l-.109.038c-1.308.446-2.816.696-4.402.696-1.625 0-3.167-.262-4.496-.728 1.168.624 2.601 1.014 4.208 1.056l.285.003.217-.002c1.643-.03 3.109-.425 4.297-1.063zM11.515 8c-.767 0-1.29-1.593-.86-1.9.45-.281 2.845.067 2.845.57 0 .413-1.293 1.33-1.985 1.33zm9.985 2.5C19.716 12.769 16.112 14 12 14s-7.716-1.232-9.5-3.5v4.767C2.5 18.34 6.71 21 12 21s9.5-2.66 9.5-5.734V10.5zm-9.642-9C6.633 1.545 2.498 4.077 2.5 7c0 2.95 4.21 5.5 9.5 5.5 5.205 0 9.364-2.47 9.497-5.357L21.5 7c0-2.906-4.09-5.426-9.27-5.498l-.372-.002z",
  "station-lite-2": "M23,6 C23.75,8 23.6496261,17.0511218 23,19 C22,22 17.9691229,24 12.0000033,24 C6.0308838,24 1.96442321,22.8576928 1,19 C0.5,17 0.75,7.75 1.25,6 C1.75,4.25 4.5,0.5 12,0.5 C19.5,0.5 22.25,4 23,6 Z M13.000163,14.7051546 L13.0004851,18.6561141 C9.71522141,18.8439251 6.30296455,18.1891011 3.99907738,16.6502082 L3.99890663,12.8640927 C6.62229765,14.3056773 9.87972553,14.8693575 13.000163,14.7051546 Z M21.75,10 C19,12.25 15,12.5 12,12.5 C9,12.5 4.75,12 2.5,10 C2.33333333,13 2.33333333,15.5 2.5,17.5 C2.75,20.5 6.7108988,22.5 12,22.5 C17.2892595,22.5 21,20 21.5,17.75 C21.8333333,16.25 21.9166667,13.6666667 21.75,10 Z M12.25,2 C7.49288304,2.0407647 2.99988052,4.25 2.99988052,6.44974422 C3.00006386,8.64948845 7.31351739,10.4995818 12.1298863,10.4995818 C16.8683958,10.4995818 21.25,8.75 21.25,6.5 C21.25,4.25 17.007117,1.9592353 12.25,2 Z M12.1515308,5.5 C12.9795307,5.5 13.6515308,5.94799999 13.6515308,6.5 C13.6515308,7.05200001 12.9795307,7.5 12.1515308,7.5 C11.3235308,7.5 10.6515308,7.05200001 10.6515308,6.5 C10.6515308,5.94799999 11.3235308,5.5 12.1515308,5.5 Z",
  "station-duo-max": "M5.966.501a1.5 1.5 0 0 1 .257.089l13.98 6.272a1 1 0 0 1 .562 1.147l-.16.664.811.37a1 1 0 0 1 .584.91v10.724a1 1 0 0 1-.52.877l-4.022 2.207a1 1 0 0 1-.891.035l-8.681-3.898A1.5 1.5 0 0 1 7 18.529V16.2l-4.726-2.134a1.4 1.4 0 0 1-.784-1.609L4.152 1.601a1.5 1.5 0 0 1 1.814-1.1Zm14.713 13.06-1.482.958-1.136 4.72a1.5 1.5 0 0 1-2.076 1.016L8.5 16.875v1.316a1 1 0 0 0 .484.857l.117.06 7.383 3.214a1 1 0 0 0 .916-.06l3.037-1.833A.5.5 0 0 0 20.68 20v-6.44ZM6.135 1.95a.75.75 0 0 0-.91.543L2.824 12a1 1 0 0 0 .556 1.156l12.409 5.619a.75.75 0 0 0 1.037-.502L19.27 8.5a.7.7 0 0 0-.39-.808L6.26 1.994a.75.75 0 0 0-.126-.044Z",
  "module": "M12.494 3c.759 0 1.38.589 1.43 1.334l.003.099V7.4l1.272-.65.352.688-.351-.688c.13-.066.27-.106.414-.118l.11-.003.108.008c.107.012.213.04.312.084l.098.048 2.87 1.61.654-.332a.6.6 0 0 1 .498-.02l.066.032 1.996 1.116a.572.572 0 0 1 .242.199l.03.05a.59.59 0 0 1 .081.28v.44a.6.6 0 0 1-.04.214l.847.475.039.024a.999.999 0 0 1 .471.756l.004.094v.784a1.446 1.446 0 0 1-.7 1.233l-.094.053-9.279 4.693v.41a1.433 1.433 0 0 1-2.56.885l-2.51 1.268-.025.016c-.445.224-.875.181-1.19-.043L.578 16.9l-.008-.006-.08-.05C.168 16.62 0 16.233 0 15.79c0-.759.486-1.587 1.138-1.917h.002l9.922-5.022V4.433c0-.792.641-1.433 1.432-1.433zm-1.432 14.974l-2.23 1.128c-.22.112-.442.47-.475.773l-.004.068 2.709-1.368v-.601zm-2.872.114l.101-.056 2.77-1.403v-6.434l-9.379 4.747-.057.034c-.221.15-.425.522-.425.812v.058c-.002.018-.007.021-.02.016l6.057 3.52c.154-.53.508-1.027.952-1.294zM12.494 4.2a.232.232 0 0 0-.232.233V18.88a.233.233 0 0 0 .465 0V4.432l-.005-.046a.233.233 0 0 0-.228-.185V4.2zM22.8 12.034l-8.872 4.49v.602l8.738-4.42a.246.246 0 0 0 .13-.172l.004-.044v-.456zm-7.1-4.193l-1.302.667h-.002l-.469.238v6.433l7.81-3.952L15.7 7.841zm-1.773-.258v.005l.198.386-.198-.39zm1.728.234l.045.024.046-.023a.096.096 0 0 1-.09-.001zm.585-1.047l-.538.959-.001.001-.047.085.001.002.047-.084v-.001l.538-.962zm.002 0l-.294.523.294-.523zm-2.54-1.858l-.104.063.068-.037.036-.026z",
  "module-2": "M8.825.25a2.1 2.1 0 0 1 1.96.177l3.508 2.287a4 4 0 0 1 1.816 3.35V20.66a2 2 0 0 1-1.081 1.777l-2.072 1.073a.996.996 0 0 1-.024.012l-.065.033a1.11 1.11 0 0 1-.367.064 1 1 0 0 1-.522-.147l-4.545-2.785A3 3 0 0 1 6 18.13V2.166a1.1 1.1 0 0 1 .702-1.026zm1.414 1.014a1.1 1.1 0 0 0-1.027-.092l-.963.403 3.804 2.302A3 3 0 0 1 13.5 6.444V22.1l1.068-.551a1 1 0 0 0 .533-.765l.008-.124V6.065a3 3 0 0 0-1.362-2.513z",
  "hub": "M12.7501851,3 C18.9063933,3.27869261 23.9999439,6.33021701 23.9999439,10.25 C23.8333146,12.75 23.75,14 23.75,14 C23.5,19 18.578602,21.5 12,21.5 C5.42157811,21.5 0.5,19 0.25,14 L4.74851543e-05,10.2746068 C-0.00356710128,6.16042167 5.41851551,3 12.0001851,3 L12.7501851,3 Z M22.5,11.75 C20.4972732,14.1005092 16.61777,15.5479965 12.0001914,15.5479965 C7.38263225,15.5479965 3.50275411,14.1001622 1.5,11.75 L1.75,14.5 C2,18 7.00018513,20 12.0001851,20 C17.0001851,20 22,18 22.25,14.5 L22.5,11.75 Z",
  "display-xiaomi": "M22 .5a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-19a2 2 0 0 1 2-2h20Zm-.5 2h-19a1 1 0 0 0-1 1v13h21v-13a1 1 0 0 0-1-1ZM12 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z",
  "dexp-smartbox": "M1.5 11.303v4.073c0 .135.08.292.206.4l.067.05 8.235 5.797c1.259.774 2.807.807 4.004.1l.162-.102 8.043-5.737a.737.737 0 0 0 .254-.336l.018-.068.006-.218-.006-3.921-7.598 5.24c-1.675 1.172-3.703 1.213-5.426.127l-.184-.12L1.5 11.302zm8.996-7.443l-.184.093-7.887 5.008a1.797 1.797 0 0 0-.24.189.685.685 0 0 1-.14.17c-.15.229-.091.436.109.607l.06.047 7.913 5.374c1.199.823 2.565.857 3.754.104l.154-.102 7.722-5.326c.23-.153.316-.382.158-.653l-.048-.074-.027-.022a.745.745 0 0 1-.116-.138 2.212 2.212 0 0 0-.346-.27l-.118-.074-7.315-4.79c-1.123-.632-2.342-.671-3.45-.143zm-.638 7.075a.75.75 0 0 1-.162.983l-.071.051-1.14.722a.75.75 0 0 1-.873-1.217l.07-.05 1.141-.722a.75.75 0 0 1 1.035.233zm5.301-.275l.077.042 1.139.721a.75.75 0 0 1-.725 1.31l-.077-.042-1.14-.72a.75.75 0 0 1 .726-1.311zm-3.15-1.992c.604 0 1.094.358 1.094.798 0 .44-.49.798-1.093.798-.604 0-1.094-.357-1.094-.798 0-.44.49-.798 1.094-.798zm4.599-2.016a.75.75 0 0 1-.162.984l-.071.05-1.14.722a.75.75 0 0 1-.872-1.217l.07-.051 1.14-.72a.75.75 0 0 1 1.035.232zm-8.095-.277l.077.042 1.14.722a.75.75 0 0 1-.725 1.31l-.077-.043-1.14-.721a.75.75 0 0 1 .725-1.31zm14.28 1.746c.632.46 1.018 1.01 1.132 1.604a.773.773 0 0 1 .056.203l.006.1.013 3.847-.004 1.201-.016.554a2.215 2.215 0 0 1-.783 1.393l-.115.087-8.057 5.746c-1.673 1.115-3.842 1.154-5.65.132l-.191-.113-8.246-5.803a2.069 2.069 0 0 1-.932-1.55L0 15.376V9.998c0-.047.004-.093.013-.137.05-.609.392-1.176.992-1.635.157-.18.348-.35.576-.504l.156-.1L9.553 2.66c1.585-.86 3.344-.886 4.968-.048l.203.109 7.331 4.8c.329.195.598.417.811.653l-.073-.054z",
  "elari-smartbeat": "M11.825 0c4.384 0 6.86 3.489 6.86 7.316v11.515c0 2.593-2.974 5.169-6.86 5.169l-.195-.002C7.882 23.918 5 21.568 5 18.83V7.316c0-1.76.294-3.167 1.194-4.407C7.445 1.211 9.626 0 11.824 0zm5.617 9.345c-2.696 2.207-8.566 2.169-11.199.114l.001 9.372c0 2.028 2.372 3.925 5.58 3.925l.186-.002c3.071-.076 5.33-2.007 5.428-3.801l.003-.122.001-9.486zM15.86 2.94c.246 1.48-.508 3.19-2.037 4.488-1.985 1.676-4.87 2.165-6.751 1.13 2.468 1.863 9.177 1.61 10.356-1.156l.014-.038v-.048c0-1.672-.55-3.248-1.582-4.376zm-1.905-.979c-1.203-1.067-3.9-.763-5.659.754C6.52 4.233 6.11 6.135 7.201 7.129l.06.054.1.083c.342.263.768.436 1.242.523l-.09-.087c-1.138-1.15-.727-2.987.783-4.259 1.474-1.258 3.754-1.485 4.955-.412.157.138.29.288.4.446a2.017 2.017 0 0 0-.697-1.516zM10.1 4.392c-1 .843-1.24 1.846-.723 2.412l.068.068.086.072c.777.603 2.315.43 3.354-.442 1.019-.852 1.22-1.939.539-2.542-.69-.615-2.282-.457-3.324.432z",
  "irbis-a": "M11.754 0c4.18 0 7.8 1.474 9.213 3.658l-.023-.022c.92.844 1.363 1.875 1.411 3.093a.628.628 0 0 1 .033.13l.006.084.112 6.62v.001C22.506 19.995 17.691 24 11.753 24 5.775 24 1 20.03 1 13.564l.002-.042L1 13.365l.112-6.423.005-.077.003-.14c.05-1.134.465-2.123 1.291-2.944l.135-.13C3.963 1.47 7.58 0 11.754 0zM3.68 18.553c1.63 2.622 4.601 4.103 8.074 4.103 3.41 0 6.364-1.465 8.012-4.036-1.96 1.413-4.813 2.186-8.012 2.186-3.285 0-6.135-.797-8.074-2.253zM2.444 7.609l-.1 5.768c0 3.724 3.919 6.085 9.409 6.085 5.25 0 9.27-2.23 9.405-5.707l.004-.181-.1-5.96c-1.341 2.268-5.032 3.811-9.308 3.811-4.28 0-7.973-1.545-9.31-3.816zm9.31-6.265c-4.745 0-8.501 2.064-8.501 4.369 0 2.304 3.756 4.368 8.501 4.368 4.745 0 8.502-2.064 8.502-4.368 0-2.304-3.757-4.369-8.502-4.369zm.004 5.82c.697 0 1.262.316 1.262.706 0 .39-.565.706-1.262.706-.698 0-1.262-.316-1.262-.706 0-.39.565-.706 1.262-.706zm4.318-2.157c.698 0 1.262.316 1.262.706 0 .39-.565.705-1.262.705-.697 0-1.262-.316-1.262-.705 0-.39.565-.706 1.262-.706zm-8.65 0c.698 0 1.262.316 1.262.706 0 .39-.565.705-1.262.705-.697 0-1.262-.316-1.262-.705 0-.39.565-.706 1.262-.706zm4.33-2.155c.695 0 1.26.315 1.26.705 0 .365-.496.665-1.132.702l-.128.003c-.696 0-1.26-.315-1.26-.705 0-.39.563-.705 1.26-.705z",
  "lg-xboom-wk7y": "M12.076 0c3.857 0 7.076 1.664 7.076 3.999v15.2c0 2.43-3.434 4.801-7.076 4.801C8.432 24 5 21.629 5 19.2V3.997C5 1.665 8.219 0 12.076 0zm5.664 6.44l-.075.054-.062.044-.036.026a5.57 5.57 0 0 1-.548.333 2.991 2.991 0 0 1-.16.084 7.225 7.225 0 0 1-.395.186l-.043.018a5.986 5.986 0 0 1-.308.125 10.14 10.14 0 0 1-.19.07l-.03.01a9.046 9.046 0 0 1-.305.102l-.061.019a8.653 8.653 0 0 1-.186.055l-.18.049a1.372 1.372 0 0 1-.025.007l-.191.048-.095.022a12.495 12.495 0 0 1-.782.152 12.187 12.187 0 0 1-.592.08l-.16.016-.12.01a12.926 12.926 0 0 1-.788.044l-.117.002-.215.002c-.09 0-.18 0-.27-.003l-.063-.001a13.177 13.177 0 0 1-.788-.044l-.12-.01a12.712 12.712 0 0 1-.75-.096l-.056-.009a11.916 11.916 0 0 1-1.038-.22 10.53 10.53 0 0 1-.22-.06l-.127-.038a14.46 14.46 0 0 1-.189-.06 9.107 9.107 0 0 1-.934-.365 8.64 8.64 0 0 1-.333-.166l-.053-.028a7.86 7.86 0 0 1-.41-.241 7.302 7.302 0 0 1-.108-.072l-.068-.047-.062-.044-.038-.027-.005-.004-.032-.023V19.2c0 1.514 2.713 3.388 5.664 3.388 2.95 0 5.664-1.874 5.664-3.389V6.44zm-5.394 1.555l-.135.002-.135.001c.111 0 .222-.001.332-.004l-.117.002h.055zm-.27-6.583c-3.18 0-5.664 1.284-5.664 2.587 0 .888 1.155 1.768 2.898 2.238l.176.046c.675.167 1.432.274 2.24.298l.35.005c3.18 0 5.664-1.284 5.664-2.587 0-1.303-2.485-2.587-5.664-2.587zm0 1.804c.52 0 .94.28.94.627 0 .346-.42.628-.94.628s-.941-.282-.941-.628c0-.346.421-.627.94-.627zm5.712 3.186l.07-.052.012-.012-.034.028-.048.036z",
  "prestigio-smartmate": "M11.851 0l.286.002c3.452.05 5.809 1.115 7.201 2.953.958 1.264 1.353 2.722 1.387 4.154l.003.205v9.833c0 3.63-3.67 6.765-8.647 6.851l-.212.002-.222-.002c-4.906-.085-8.542-3.132-8.645-6.695L3 17.148V7.314c0-.335.02-.67.06-1.006l.035-.252.02-.13.006-.026A6.789 6.789 0 0 1 4.39 2.956C5.782 1.118 8.139.053 11.59.002L11.851 0zm4.521 21.764l-.109.038c-1.308.446-2.816.696-4.402.696-1.625 0-3.167-.262-4.496-.728 1.168.624 2.601 1.014 4.208 1.056l.285.003.217-.002c1.643-.03 3.109-.425 4.297-1.063zM19.558 9.03c-1.47 1.595-4.287 2.719-7.696 2.719-3.405 0-6.222-1.123-7.692-2.717v8.116l.002.102.003.021c.119 2.195 3.54 4.056 7.686 4.056 4.076 0 7.452-1.8 7.678-3.947l.008-.11a.591.591 0 0 1 .009-.072l.001-.05V9.03zm-1.42-5.692l.007.02c.084.262.129.534.129.816 0 2.325-2.985 3.947-6.41 3.947-3.468 0-6.425-1.65-6.425-3.947 0-.279.043-.548.125-.805a4.898 4.898 0 0 0-.241.294c-.595.786-.931 1.679-1.072 2.59-.232 2.108 2.96 4.325 7.611 4.325 4.743 0 7.968-2.304 7.593-4.45l-.002-.02a5.653 5.653 0 0 0-1.048-2.446 5.224 5.224 0 0 0-.266-.324zm-6.289-1.94c-2.865 0-5.239 1.29-5.239 2.776 0 1.466 2.347 2.777 5.254 2.777 2.865 0 5.24-1.29 5.24-2.777 0-1.468-2.347-2.778-5.255-2.776zM9.526 4.39c.605 0 1.17.283 1.17.878 0 .596-.565.878-1.17.878s-1.171-.282-1.171-.878c0-.595.566-.878 1.17-.878zm4.683 0c.605 0 1.17.283 1.17.878 0 .596-.565.878-1.17.878-.606 0-1.171-.282-1.171-.878 0-.595.565-.878 1.17-.878zM9.526 2.05c.605 0 1.17.283 1.17.878s-.565.878-1.17.878-1.171-.283-1.171-.878.566-.878 1.17-.878zm4.683 0c.605 0 1.17.283 1.17.878s-.565.878-1.17.878c-.606 0-1.171-.283-1.171-.878s.565-.878 1.17-.878z",
  "jbl-link-music": "M11.95 0c1.68 0 3.35.508 5.018 1.466 3.262 1.895 3.898 3.635 3.952 9.583l.003.94c0 3.68-.117 5.087-.463 6.323l-.062.21C19.321 21.928 15.328 24 11.951 24c-1.667 0-3.328-.49-5-1.468-3.2-1.887-3.892-3.715-3.947-9.179L3 12.743V11.55c.006-1.41.047-2.854.11-3.872.238-2.985 1.718-5.085 4.039-6.374C8.73.426 10.618 0 11.95 0zm6.62 4.387l-.002.008c-.181.854-.98 1.696-2.383 2.457-2.883 1.585-5.76 1.532-8.587-.072-1.203-.696-1.993-1.46-2.234-2.258-.581.893-.94 1.968-1.042 3.242a74.15 74.15 0 0 0-.107 4.137v.84c.011 5.354.475 6.954 3.056 8.564l.296.179c1.491.872 2.943 1.3 4.384 1.3 2.903 0 6.398-1.813 7.287-4.622.311-1.023.441-2.124.466-5.033l.004-1.14c0-4.146-.183-6.2-1.138-7.602zm-6.62-3.172c-.61 0-1.38.11-2.175.33-1.14.381-2.286 1.036-2.878 1.63-.844.849-.435 1.631 1.268 2.617 2.483 1.409 4.939 1.454 7.474.06 2.383-1.293 2.434-2.281.167-3.568a9.11 9.11 0 0 0-1.232-.597 7.815 7.815 0 0 0-2.623-.472zm-.337 1.524c.39-.101.785-.021 1.163.208.642.41.713 1.09.042 1.548-.53.342-1.108.36-1.67.031-.437-.275-.65-.7-.437-1.144.138-.291.418-.478.78-.605l.122-.038z",
  "jbl-link-portable": "M8.972 1.008c2.103-1.271 4.185-1.334 6.263-.225.167.09.325.18.473.273l.007-.01c1.494.921 2.263 2.021 2.61 3.636.096.445.143.829.168 1.297l.032.72c.12 2.993.112 9.324-.039 11.453-.081 1.26-.384 2.325-.981 3.185-.429.629-1.046 1.167-1.824 1.652-1.23.754-2.531 1.102-3.862.99-1.112-.092-2.225-.522-3.185-1.194-1.526-1.02-2.275-2.306-2.486-4.352l-.024-.289c-.17-2.381-.163-10.336.006-12.442.08-1.046.327-1.98.775-2.758.332-.577.777-1.031 1.418-1.498.195-.149.412-.294.649-.438zm8.051 3.482l-.038.053c-.298.395-.748.783-1.357 1.152-2.142 1.294-4.315 1.333-6.435.117l-.16-.09c-.635-.365-1.146-.765-1.47-1.218a6.522 6.522 0 0 0-.221 1.292l-.022.314c-.15 2.55-.141 10.424.037 12.2.174 1.69.733 2.65 1.963 3.472.802.56 1.712.913 2.6.987 1.06.089 2.108-.192 3.122-.813.643-.401 1.138-.833 1.462-1.308.422-.608.663-1.386.75-2.337l.02-.241c.143-2.023.154-8.01.047-11.062l-.032-.735a7.046 7.046 0 0 0-.152-1.335 5.874 5.874 0 0 0-.114-.448zm-2.36-2.634C12.964.949 11.338.998 9.6 2.048l.011-.007c-.166.106-.32.208-.46.307-.476.352-.752.693-.765.975-.015.412.527.95 1.401 1.429l.187.103c1.68.894 3.322.83 5.025-.2 1.708-1.035 1.602-1.768-.336-2.8zm-2.708.504c.39-.102.786-.022 1.163.207.643.41.713 1.09.043 1.548-.53.342-1.108.36-1.67.032-.437-.276-.65-.7-.438-1.145.139-.29.418-.478.781-.605l.121-.037z",
  "music": "M10.92 0v3.621a8.4 8.4 0 1 0 9.32 6.695l3.04-2.445-.002-.02A12 12 0 1 1 10.92 0Zm3.36.167c2.649.51 4.988 1.89 6.707 3.832l.013.032-2.032 3.227a8.442 8.442 0 0 0-2.888-2.651v7.344a4.08 4.08 0 1 1-1.8-3.384v-8.4Z",
  "ya": "M12 0c6.626 0 12 5.372 12 12s-5.374 12-12 12C5.371 24 0 18.628 0 12S5.371 0 12 0Zm4 5h-3.422C9.131 5 7.313 6.84 7.313 9.537c0 2.151.992 3.423 2.758 4.732L7 19h2.557l3.422-5.288-1.19-.83c-1.442-1.012-2.144-1.802-2.144-3.487 0-1.491 1.015-2.502 2.946-2.502h1.052v12.094H16V5Z",
  "ya_en": "M12 0c6.626 0 12 5.372 12 12s-5.374 12-12 12C5.371 24 0 18.628 0 12S5.371 0 12 0ZM8.553 5H6l3.69 8.078c.757 1.652.977 2.598.977 4.512V19H13v-1.712c0-2.317-.399-3.364-1.316-5.379L8.553 5ZM18 5h-2.286L13 12h2.25L18 5Z",
  "kinopoisk": "M12.196 0C16.214 0 19.778 1.911 22 4.86l-10.19 5.366L18.369 3.6h-3.635L10.27 9.696V3.6H7.318v16.8h2.951v-6.086l4.464 6.086h3.635l-6.387-6.418 10.007 5.174A12.244 12.244 0 0 1 12.196 24C5.461 24 0 18.627 0 12S5.46 0 12.196 0ZM13 13l11 .731A11.661 11.661 0 0 1 23.075 17L13 13Zm10.069-6A11.75 11.75 0 0 1 24 10.292L13 11Z"
};

async function getIcon(name) {
  return { path: YANDEX_ICONS_MAP[name.replace(/_/g,'-')] };
}

async function getIconList() {
  return Object.keys(YANDEX_ICONS_MAP).map(icon => ({name: icon}));
}

if (!window.frontendVersion || window.frontendVersion <= 20211027.0){
  window.customIconsets = window.customIconsets || {};
  window.customIconsets["yandex"] = getIcon;
}else{
  window.customIcons = window.customIcons || {};
  window.customIcons["yandex"] = { getIcon, getIconList };
}