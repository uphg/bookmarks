# 第一次关联两个仓库
echo -e "\n== 关联两个仓库 =="
git add .
git commit -m "first commit"
git remote add github git@github.com:uphg/bookmarks.git
git remote add gitee git@gitee.com:uphg/bookmarks.git

git push github master:master
git push gitee master:master