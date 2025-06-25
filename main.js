<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Triangle Roll</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: black;
      overflow: hidden;
    }
    #rollBtn {
      position: absolute;
      left: 50%;
      top: 85%;
      transform: translate(-50%, -50%);
      padding: 12px 24px;
      font-size: 18px;
      background: #222;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button id="rollBtn">Roll</button>

  <script src="https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.min.js"></script>
  <script type="module" src="./main.js"></script>
</body>
</html>
