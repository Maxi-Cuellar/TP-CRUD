const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const inSale = products.filter(producto => producto.category === "in-sale")
		const visited = products.filter(producto => producto.category === "visited")

		return res.render("index", {
			inSale, visited, toThousand
		})
	},
	search: (req, res) => {
	/* 	return res.render("search") */
		const {keywords} = req.query;
		const productsFiltered = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()) || product.description.toLowerCase().includes(keywords))
		return res.render("results",{
			productsFiltered, toThousand, keywords
		})
	},
};

module.exports = controller;
