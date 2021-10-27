read Y

if [[ "$Y" == "Y" ]]; then
  echo "YES"
elif [[ "$Y" == "y" ]]; then
  echo "YES"
elif [[ "$Y" == "N" ]]; then
  echo "NO"
elif [[ "$Y" == "n" ]]; then
  echo "NO"
fi
