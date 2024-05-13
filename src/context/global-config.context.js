import createGlobalState from "react-create-global-state";
import { CONTEXT_CONFIG_DEFAULT } from "../constants";

const stateInStorage = localStorage.getItem("config");
const initialState = stateInStorage
  ? JSON.parse(stateInStorage)
  : CONTEXT_CONFIG_DEFAULT;

const [_useGlobalConfig, Provider] = createGlobalState(initialState);

function useGlobalConfig() {
  const [_config, _setConfig] = _useGlobalConfig();

  function setConfig(config) {
    _setConfig(config);
    localStorage.setItem("config", JSON.stringify(config));
  }

  return [_config, setConfig];
}

export const GlobalConfigProvider = Provider;
export default useGlobalConfig;
