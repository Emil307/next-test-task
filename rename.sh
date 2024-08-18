name=$1

grep -rl "next-test-task" --exclude-dir=.git | xargs sed -i "s/next-test-task/${name}/g"
grep -rl "Next-test-task" --exclude-dir=.git | xargs sed -i "s/Next-test-task/${name^}/g"
