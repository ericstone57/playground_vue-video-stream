#!/bin/bash
set -x
set -e

PRO_SRV='eric@106.14.152.73'
PRO_WWW='/data/repo/projects/wx-asics.e0x233.com/html/video-stream'

rsync \
  --exclude=.DS_Store \
  --exclude=.git/ \
  --exclude=.gitignore \
  --exclude=.idea \
  --exclude=.vagrant \
  --exclude=*.box\
  --exclude=*.sql\
  --exclude=*.tgz\
  --exclude=*.zip\
  --exclude=deploy.sh \
  --delete \
  -arvP ./dist/ $PRO_SRV:$PRO_WWW

