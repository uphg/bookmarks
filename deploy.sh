#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo -e "\n== commit =="
git init
git add -A
git commit -m 'deploy'
echo -e "== commit end ==\n"
echo "== GitHub =="
git push -f git@github.com:uphg/bookmarks.git master:gh-pages
echo -e "== GitHub end ==\n"
echo "== Gitee ==="
git push -f git@gitee.com:uphg/bookmarks.git master:gh-pages
echo -e "== Gitee ==\n"
echo "== Exit the build folder =="
cd -
