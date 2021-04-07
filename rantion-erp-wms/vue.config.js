'use strict'
const path = require('path')
const webpack = require('webpack')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const { name } = require('./package.json')
function resolve(dir) {
	return path.join(__dirname, dir)
}
// const name = '蓝深门户wms' // page title
const port = 4323 // dev port
// const publicPath = process.env.NODE_ENV === 'development' ? `/` : '/'
const publicPath = process.env.NODE_ENV === 'development' ? `http://127.0.0.1:${port}/` : '/child-app/wms/'
module.exports = {
	publicPath,
	outputDir: 'dist',
	assetsDir: 'static',
	productionSourceMap: false,
	devServer: {
		port: port,
		open: false,
		compress: true,
		disableHostCheck: true,
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		overlay: {
			warnings: false,
			errors: true
		},
		proxy: {
			'/serverApi/rantion-wms': {
				target: 'http://47.107.254.110:8066',
				pathRewrite: { '^/serverApi/rantion-wms': '' }
			},
			'/serverApi': {
				target: 'http://192.168.120.178:28082',
				pathRewrite: { '^/serverApi': '' }
			}
		}
		// proxy: {
		// 	'/serverApi': {
		// 		target: 'http://47.107.254.110:28082',
		// 		pathRewrite: { '^/serverApi': '' }
		// 	}
		// }
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': resolve('src')
			}
		},
		output: {
			// 把子应用打包成 umd 库格式
			library: `${name}-[name]`,
			libraryTarget: 'umd',
			jsonpFunction: `webpackJsonp_${name}`
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.API_URL': JSON.stringify('/serverApi'),
				'process.env.APP_NAME': `'${name}'`
			}),
			new MomentLocalesPlugin({
				localesToKeep: ['zh-cn']
			})
			// 复制src/public目录
			// new CopyWebpackPlugin([
			// 	{
			// 		from: 'static',
			// 		to: 'modeler'
			// 	}
			// ])
		]
	},
	chainWebpack(config) {
		config.plugins.delete('preload') // TODO: need test
		config.plugins.delete('prefetch') // TODO: need test
		config.module
			.rule('svg')
			.exclude.add(resolve('src/plugin/icons'))
			.end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('src/plugin/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]'
			})
			.end()
		const imgRule = config.module.rule('images')
		imgRule.uses.clear()
		imgRule
			.use('file-loader')
			.loader('file-loader')
			.options({
				name: 'img/[name].[hash:8].[ext]',
				publicPath
			})
			.end()
		config.optimization.splitChunks({
			chunks: 'all',
			cacheGroups: {
				commons: {
					name: 'chunk-api',
					test: resolve('./src/api'),
					minChunks: 1,
					priority: 5,
					chunks: 'initial'
					// reuseExistingChunk: true
				},
				libs: {
					name: 'chunk-libs',
					test: /[\\/]node_modules[\\/]/,
					priority: 30,
					chunks: 'initial'
				}
			}
		})
		config.module
			.rule('vue')
			.use('vue-loader')
			.loader('vue-loader')
			.tap((options) => {
				options.compilerOptions.preserveWhitespace = true
				return options
			})
			.end()
	}
}
