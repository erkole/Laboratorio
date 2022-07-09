import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ClientiService } from '../../services/clienti.service';
// Import Models
import { Clienti } from '../../domain/laboratorio_db/clienti';

// START - USED SERVICES
/**
* ClientiService.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Clienti
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Clienti
 * @class ClientiListComponent
 */
@Component({
    selector: 'app-clienti-list',
    templateUrl: './clienti-list.component.html',
    styleUrls: ['./clienti-list.component.css']
})
export class ClientiListComponent implements OnInit {
    list: Clienti[];
    search: any = {};
    idSelected: string;
    constructor(
        private clientiService: ClientiService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.clientiService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Clienti to remove
     *
     * @param {string} id Id of the Clienti to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Clienti
     */
    deleteItem() {
        this.clientiService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
