import { App } from 'vue'
import Brand from './Form/brand'
import Config from './Form/config'
import Country from './Form/country'
import LogAttrTyp from './Form/logAttrType'
import LogGroup from './Form/logGroup'
import Material from './Form/material'
import MeterUnit from './Form/meterUnit'
import Organiza from './Form/organiza'
import SysUser from './Form/sysUser'
import SpuType from './Form/type'
import UnitType from './Form/unitType'

const components = [
	Brand,
	Config,
	Country,
	LogAttrTyp,
	LogGroup,
	Material,
	MeterUnit,
	Organiza,
	SysUser,
	SpuType,
	UnitType
]
function install(app: App) {
	components.forEach(function(component) {
		app.use(component)
	})
}

export default {
	install: install
}
