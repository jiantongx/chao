# 本项目纯作者手残敲的
## 安装：
### 1.安装node.js
### 2.把项目克隆到本地，指令：git clone https://github.com/jiantongx/chao.git
### 3.在chao目录下安装包readline-sync，指令：npm i readline-sync
## 使用：
### 1.app.js为加秘脚本，parse.js为解密脚本
### 2.把chao目录放到想加密文件所在的同一文件夹中
### 3.进入chao文件夹打开cmd
### 4. 加密 ==> 输入node app.js，随后提示path时写被加密文件相对于它所在目录的路径(such:hello.txt)或绝对路径，在key中写密码（只能是数字）
### 5. 解密 ==> 输入node parse.js，随后提示path时写被加密文件相对于它所在目录的路径(such:hello.txt)或绝对路径，在key中写密码（只能是数字）