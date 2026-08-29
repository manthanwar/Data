#! /c/Users/amit/AppData/Local/Programs/Python/Python312/python
#! /usr/bin/env python3
# ==============================================================================
# File Name     : <file-management.py>
# Description   : python script for managing files
# ------------------------------------------------------------------------------
# Author        : Amit Manohar Manthanwar
# Mailer        : manthanwar@hotmail.com
# GitHub        : https://manthanwar.github.io/
# ------------------------------------------------------------------------------
# Copyright     : ©2024 Amit Manohar Manthanwar
# License       : LaTeX Project Public License
# ==============================================================================
# GNU make also has -s, --silent, --quiet options to quieten globally
# ==============================================================================
# -------------+---------+------------------------------------------------------
# Revision Log | Author  | Description
# -------------+---------+------------------------------------------------------
# 01-Dec-2024  | AMM     | Initial Version
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# -------------+---------+------------------------------------------------------
# ------------------------------------------------------------------------------
# ==============================================================================

# import csv
import requests
from bs4 import BeautifulSoup

# https://www.oica.net/category/production-statistics/1999-statistics/

for year in range(1999, 2024, 1):
    url = 'https://www.oica.net/category/production-statistics/'
    url = url + str(year) + '-statistics/'
    print(url)

    req = requests.get(url)
    soup = BeautifulSoup(req.content, 'html.parser')

    div = soup.find('div', class_='bloc lightblue-b')
    heading = div.find_all('h2')[0].text.strip().split()
    filename = 'automotive-production-statistics-' + heading[0] + '.csv'
    print(filename)

    table = soup.find('table')
    table_head = table.find('thead')
    table_body = table.find('tbody')

    # print(table_head)
    data = []
    row_h = table_head.find('tr')
    col_h = row_h.find_all('th')
    val_h = [ele.text.strip() for ele in col_h]
    data.append([ele for ele in val_h if ele])  # Get rid of empty values

    # print(head[0])

    rows = table_body.find_all('tr')
    for row in rows:
        cols = row.find_all('td')
        cols = [ele.text.strip() for ele in cols]
        data.append([ele for ele in cols if ele])  # Get rid of empty values

    # print(data)

    # with open(filename, "w+") as file:
    #     writer = csv.writer(file, delimiter=',')
    #     writer.writerows(data)

    f = open(filename, 'w')
    for item in data:
        f.write(','.join([str(x.replace(',', '')) for x in item]) + '\n')
    f.close()
