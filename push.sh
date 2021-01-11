if [ -z $1 ];then
parame="update"
else
parame=$1
fi

echo -e "\n== commit =="
git add .
git commit -m "${parame}"
echo -e "== commit end ==\n"
echo "== GitHub =="
git push github master:master
echo -e "== GitHub end ==\n"
echo "== Gitee ==="
git push gitee master:master
echo -e "== Gitee ==\n"