package com.lube.cerne;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.ejb.TransactionManagement;

@Singleton
@Startup
@TransactionManagement(value = javax.ejb.TransactionManagementType.BEAN)
public class AppStartup {
	@PostConstruct
	public void postConstruct() {

	}
}
