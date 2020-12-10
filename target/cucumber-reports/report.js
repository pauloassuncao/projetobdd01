$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("funcionalidades/AcessoAoSistema.feature");
formatter.feature({
  "name": "Acesso ao Sistema",
  "description": "\tComo um usuário do sistema\n\tEu quero acessar minha conta de usuário\n\tPara que eu possa gerenciar funcionários",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Acesso ao sistema com sucesso",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "Acessar a página de autenticação de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.acessar_a_página_de_autenticação_de_usuários()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Informar o email de acesso \"sergio.coti@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.informar_o_email_de_acesso(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027DESKTOP-QD4OM51\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\paulo\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62907}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 77e2fce54ae245d83ede78d98df9535d\n*** Element info: {Using\u003dcss selector, value\u003d#Email}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat teststeps.AcessoAoSistemaTestSteps.informar_o_email_de_acesso(AcessoAoSistemaTestSteps.java:35)\r\n\tat ✽.Informar o email de acesso \"sergio.coti@gmail.com\"(funcionalidades/AcessoAoSistema.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Informar a senha de acesso \"@S3rg10\"",
  "keyword": "E "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.informar_a_senha_de_acesso(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Solicitar o acesso ao sistema",
  "keyword": "Quando "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.solicitar_o_acesso_ao_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sistema autentica o usuário com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.sistema_autentica_o_usuário_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Aplicação é finalizada",
  "keyword": "E "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.aplicação_é_finalizada()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Acesso negado de usuário",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "Acessar a página de autenticação de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.acessar_a_página_de_autenticação_de_usuários()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Informar o email de acesso \"teste@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.informar_o_email_de_acesso(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Informar a senha de acesso \"teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.informar_a_senha_de_acesso(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Solicitar o acesso ao sistema",
  "keyword": "Quando "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.solicitar_o_acesso_ao_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sistema exibe a mensagem \"Acesso Negado\"",
  "keyword": "Então "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.sistema_exibe_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Aplicação é finalizada",
  "keyword": "E "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.aplicação_é_finalizada()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validação de campos obrigatórios",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "Acessar a página de autenticação de usuários",
  "keyword": "Dado "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.acessar_a_página_de_autenticação_de_usuários()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Solicitar o acesso ao sistema",
  "keyword": "Quando "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.solicitar_o_acesso_ao_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sistema informa que o campo email é de preenchimento obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.sistema_informa_que_o_campo_email_é_de_preenchimento_obrigatório()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sistema informa que o campo senha é de preenchimento obrigatório",
  "keyword": "E "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.sistema_informa_que_o_campo_senha_é_de_preenchimento_obrigatório()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Aplicação é finalizada",
  "keyword": "E "
});
formatter.match({
  "location": "AcessoAoSistemaTestSteps.aplicação_é_finalizada()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("funcionalidades/CadastroDeUsuario.feature");
formatter.feature({
  "name": "Cadastro de Usuário",
  "description": "\tComo um usuário do sistema\n\tEu quero criar uma conta de acesso\n\tPara que eu possa acessar a área restrita da aplicação",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Cadastro de conta de usuário com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "Acessar a página de cadastro de conta de usuário",
  "keyword": "Dado "
});
formatter.step({
  "name": "Informar o nome do usuário \u003cnome\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "Informar o email do usuário \u003cemail\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "Informar a senha do usuário \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "Confirmar a senha do usuário \u003csenha\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "Informar a foto do usuário \u003cfoto\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "Solicitar a realização do cadastro",
  "keyword": "Quando "
});
formatter.step({
  "name": "Sistema informa que o usuário foi cadastrado com sucesso",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha",
        "foto"
      ]
    },
    {
      "cells": [
        "\"Sergio da Silva Mendes\"",
        "\"sergio.coti@gmail.com\"",
        "\"@Coti123\"",
        "\"foto_usuario.jpg\""
      ]
    },
    {
      "cells": [
        "\"Ana Paula da Silva\"",
        "\"anapaula@gmail.com\"",
        "\"@Teste123\"",
        "\"foto_usuario.jpg\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cadastro de conta de usuário com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "Acessar a página de cadastro de conta de usuário",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.acessar_a_página_de_cadastro_de_conta_de_usuário()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat teststeps.CadastroDeUsuarioTestSteps.acessar_a_página_de_cadastro_de_conta_de_usuário(CadastroDeUsuarioTestSteps.java:12)\r\n\tat ✽.Acessar a página de cadastro de conta de usuário(funcionalidades/CadastroDeUsuario.feature:10)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Informar o nome do usuário \"Sergio da Silva Mendes\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.informar_o_nome_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Informar o email do usuário \"sergio.coti@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.informar_o_email_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Informar a senha do usuário \"@Coti123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.informar_a_senha_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Confirmar a senha do usuário \"@Coti123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.confirmar_a_senha_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Informar a foto do usuário \"foto_usuario.jpg\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.informar_a_foto_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Solicitar a realização do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.solicitar_a_realização_do_cadastro()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sistema informa que o usuário foi cadastrado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.sistema_informa_que_o_usuário_foi_cadastrado_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Cadastro de conta de usuário com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "Acessar a página de cadastro de conta de usuário",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.acessar_a_página_de_cadastro_de_conta_de_usuário()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat teststeps.CadastroDeUsuarioTestSteps.acessar_a_página_de_cadastro_de_conta_de_usuário(CadastroDeUsuarioTestSteps.java:12)\r\n\tat ✽.Acessar a página de cadastro de conta de usuário(funcionalidades/CadastroDeUsuario.feature:10)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Informar o nome do usuário \"Ana Paula da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.informar_o_nome_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Informar o email do usuário \"anapaula@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.informar_o_email_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Informar a senha do usuário \"@Teste123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.informar_a_senha_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Confirmar a senha do usuário \"@Teste123\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.confirmar_a_senha_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Informar a foto do usuário \"foto_usuario.jpg\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.informar_a_foto_do_usuário(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Solicitar a realização do cadastro",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.solicitar_a_realização_do_cadastro()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sistema informa que o usuário foi cadastrado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeUsuarioTestSteps.sistema_informa_que_o_usuário_foi_cadastrado_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
});