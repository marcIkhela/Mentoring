# set -e
# until pg_isready -h "${PG_HOST}" -p 5432 -U "${PG_USER}"; do
#     echo "$(date) - waiting for db to start"
#     sleep 1
# done
# exec "$@"
# npx prisma db push
# npx prisma generate
# npx prisma db seed
