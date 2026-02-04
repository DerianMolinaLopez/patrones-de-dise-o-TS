

--Auto - refrescar neotree al crear / guardar archivos
vim.api.nvim_create_autocmd({ "BufWritePost", "BufNewFile"}, {
  pattern = "*",
  callback = function ()
    --Solo refrescar si neotree está cargado
    local ok, manager = pcall(require, "neo-tree.sources.manager")
    if ok then
manager.refresh("filesystem")
end
end,
})
