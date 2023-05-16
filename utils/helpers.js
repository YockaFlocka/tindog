const get_breed_from_url = url =>
url.split("breeds/")[1].split("/")[0]

module.exports = get_breed_from_url;
