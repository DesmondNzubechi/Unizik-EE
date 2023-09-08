import React from "react";
import { Bus101props } from "./Bus101prop";


export const Bus101Content = () => {
    return (
        <>
       <Bus101props
        Topic='Introduction :'
        subtopic='Scope of business. Definition of business. External properties of business. Role of business. Types of economic systems. Why study business?  '
        />
        <Bus101props 
        Topic='Forms of Business Ownership :'
        subtopic='Sole proprietorship. Partnership. The Joint Stock company. Statutory corporations/Public enterprises. Cooperative societies. '
        />
         <Bus101props 
        Topic='Management and Organisation '
        subtopic='Nature of management.  Functions of management. Line and staff functions in organisations.  '
        />
         <Bus101props 
        Topic='Production and Marketing :'
        subtopic=' Types of production.  Production process. The marketing concept. Marketing functions.  '
        />
         <Bus101props 
        Topic='The Accounting Function :'
        subtopic='Purpose of accounting. Principles of accounting. Double entry bookkeeping. Day books. Ledger account. The trial balance. Profit and loss account, and the balance sheet.'
        />
        
        </>
    )
}