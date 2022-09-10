#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
msg='deploy'
githubUrl=https://${1}:${3}@github.com/${1}/doc-apis
git config --global user.name "${1}"
git config --global user.email "${2}"

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:docs # 推送到github

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
