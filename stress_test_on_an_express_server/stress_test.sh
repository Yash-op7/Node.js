#!/bin/bash

target=${1:-http://localhost:3000}

while true  # infinite loop until cmd+c
do
    for i in $(seq 100)
    do
        curl $target > /dev/null &
    done

    wait
done
