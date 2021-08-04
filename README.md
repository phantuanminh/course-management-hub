# UIUC Course Management Hub

**Overview:** UIUC CMH is a web application that helps students with organizing their courses, workload and activities throughout the semester.

**Team:** Minh Phan, Bach Ta, Meghna Mavila, Cale Wolf, Ayushi Singh, Rithika Bhattaram.

## 1. Background

> In order to keep track of their classes, an Illini has to manage his/her information on least 6 websites per semester. As COVID-19 strikes, the university shifted remotely. The number of sites that students have to manage eventually increases.

**&#8594; Solution:** A central hub that allows students to keep track of their course management systems in an organized manner.

## 2. Our Approach

The Course Central Hub resembles a deck of cards that contains information about courses, activities, RSOs, etc. View our demo on Figma here: https://www.figma.com/proto/ffhqRo0S7FlRcr1tKCugeu/Website-Design?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1


![img.png](snapshot.png)

**Where do we get the data?**

- At the **first version** of the project, users would have to **manually input** data into the cards.
- For **future work**, we would retain data from school websites and automatically fill in the card, using website APIs. (school sites Moodle and PrarieLearn among others allow users to retrieve data from the site using API).

## Project Structure

```text
                    ___ Web UI (React)
                   /
                  .
frontend network |
                  .
                   \____ RESTful API (Flask)
                   /
                  .
backend network  |
                  .
                   \____ Database (MongoDB)
```