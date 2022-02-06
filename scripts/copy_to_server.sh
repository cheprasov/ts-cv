
rsync -avzr --exclude=.DS_Store -e "ssh -p 2255" ./public/ root@server2gb:/home/linl/www/cv.cheprasov.com/public/
rsync -avz --exclude=.DS_Store -e "ssh -p 2255" ./nginx/cv.cheprasov.com.conf root@server2gb:/home/linl/www/nginx/cv.cheprasov.com.conf
rsync -avz --exclude=.DS_Store -e "ssh -p 2255" ./scripts/cron_deploy.sh root@server2gb:/home/linl/www/cv.cheprasov.com/cron_deploy.sh

